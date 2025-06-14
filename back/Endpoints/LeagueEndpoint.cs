using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
using PlayVisionAPI.Data;
using PlayVisionAPI.DTOs;
using PlayVisionAPI.Models;

namespace PlayVisionAPI.Endpoints
{
    public static class LeagueEndpoint
    {
        private static async Task<Competition?> GetCompetitionByNameAsync(AppDbContext2 db, string competitionName)
            {
            if (competitionName != null)
                {
                    return await db.Competitions
                    .FirstOrDefaultAsync(c => EF.Functions.ILike(c.Name, competitionName.Trim()));// Comprobamos si el nombre de la competición existe
                }else
                {
                    return null;
                }
            }
        public static void MapLeagueEndpoints(this WebApplication app)
        {

            app.MapGet("/api/leagues/{name}/standings", async (AppDbContext2 db, string name, int? seasonYear) =>
            {

                //Comprobamos si se recibe una temporada concreta, sino elegimos la última
                var competition = await GetCompetitionByNameAsync(db, name);
                if (competition == null)
                {
                    return Results.NotFound("No se encontró la competición.");
                }

                // Si no se ha enviado un año de temporada, obtenemos el último año de la competición
                if (!seasonYear.HasValue)
                {
                    seasonYear = await db.Seasons
                    .Where(s => s.CompetitionId == competition.Id)
                    .MaxAsync(s => (int?)s.Year);
                }

                var season = await db.Seasons
                    .FirstOrDefaultAsync(s => s.Year == seasonYear.Value && s.CompetitionId == competition.Id);

                if (season == null)
                {
                    return Results.NotFound("No se encontró la temporada.");
                }

                var teamLeagueseasonStats = await db.TeamCompetitionStats
                .Where(ts => ts.CompetitionId == competition.Id && ts.SeasonId == season.Id)
                .Include(ts => ts.Team)
                .OrderByDescending(ts => ts.Points)
                .ThenByDescending(ts => (ts.GoalsFor - ts.GoalsAgainst))
                .ThenByDescending(ts => ts.GoalsFor)
                .ToListAsync();

                if (!teamLeagueseasonStats.Any()) return Results.NotFound("No se encontraron datos de la liga");

                var standings = teamLeagueseasonStats.Select((st, index) => new StandingDto
                {
                    Position = index + 1,
                    TeamId = st.Team.Id,
                    TeamName = st.Team.Name,
                    LogoUrl = st.Team.LogoUrl,
                    MatchesPlayed = st.MatchesPlayed,
                    Win = st.Win,
                    Draw = st.Draw,
                    Lose = st.Lose,
                    GoalsFor = st.GoalsFor,
                    GoalsAgainst = st.GoalsAgainst,
                    GoalDifference = st.GoalsFor - st.GoalsAgainst,
                    Points = st.Points
                }).ToList();

                return Results.Ok(standings);
            }).WithName("GetLeagueSeasonStandings");

            // Endpoint para obtener las estadísticas de los jugadores en una liga
            app.MapGet("/api/leagues/{name}/player-stats", async (AppDbContext2 db, string competitionName, int? season) =>
            {
                var competition = await GetCompetitionByNameAsync(db, competitionName);
                if (competition == null)
                {
                    return Results.NotFound("No se encontró la competición.");
                }

                var topScorers = await db.PlayerCompetitionStats
                .Where(pcs => pcs.SeasonId == season && pcs.Competition.Name == competition.Name)
                .GroupBy(pcs => new { pcs.PlayerId, pcs.Player.Lastname, pcs.Player.Team.LogoUrl })
                .Select(g => new TopScorerDto
                {
                    PlayerId = g.Key.PlayerId,
                    PlayerName = g.Key.Lastname,
                    ClubLogoUrl = g.Key.LogoUrl,
                    MatchesPlayed = g.Sum(pcs => pcs.MatchesPlayed),
                    //Penalties = g.Sum(pcs => pcs.penalties),
                    TotalGoals = g.Sum(pcs => pcs.Goals)
                }).OrderByDescending(ts => ts.TotalGoals)
                .Take(10).ToListAsync();

                var topAssists = await db.PlayerCompetitionStats
                .Where(pcs => pcs.SeasonId == season && pcs.Competition.Name == competition.Name)
                .GroupBy(pcs => new { pcs.PlayerId, pcs.Player.Lastname, pcs.Player.Team.LogoUrl })
                .Select(g => new TopAssiterDto
                {
                    PlayerId = g.Key.PlayerId,
                    PlayerName = g.Key.Lastname,
                    ClubLogoUrl = g.Key.LogoUrl,
                    MatchesPlayed = g.Sum(pcs => pcs.MatchesPlayed),
                    TotalAssists = g.Sum(pcs => pcs.Assists)
                }).OrderByDescending(ts => ts.TotalAssists)
                .Take(10).ToListAsync();

                var topYellowCards = await db.PlayerCompetitionStats
                .Where(pcs => pcs.SeasonId == season && pcs.Competition.Name == competition.Name)
                .GroupBy(pcs => new { pcs.PlayerId, pcs.Player.Lastname, pcs.Player.Team.LogoUrl })
                .Select(g => new MostYellowCardDto
                {
                    PlayerId = g.Key.PlayerId,
                    PlayerName = g.Key.Lastname,
                    ClubLogoUrl = g.Key.LogoUrl,
                    MatchesPlayed = g.Sum(pcs => pcs.MatchesPlayed),
                    YellowCards = g.Sum(pcs => pcs.YellowCards)
                }).OrderByDescending(ts => ts.YellowCards)
                .Take(10).ToListAsync();

                var topRedCards = await db.PlayerCompetitionStats
                .Where(pcs => pcs.SeasonId == season && pcs.Competition.Name == competition.Name)
                .GroupBy(pcs => new { pcs.PlayerId, pcs.Player.Lastname, pcs.Player.Team.LogoUrl })
                .Select(g => new MostRedCardsDto
                {
                    PlayerId = g.Key.PlayerId,
                    PlayerName = g.Key.Lastname,
                    ClubLogoUrl = g.Key.LogoUrl,
                    MatchesPlayed = g.Sum(pcs => pcs.MatchesPlayed),
                    RedCards = g.Sum(pcs => pcs.RedCards)
                }).OrderByDescending(ts => ts.RedCards)
                .Take(10).ToListAsync();

                var query = db.PlayerCompetitionStats
                .Include(pcs => pcs.Player).ThenInclude(p => p.Team)
                .Where(x => x.Player.Position.ToLower() == "por");

                if (competition.Name != "" && competition.Name != null)
                {
                    query = query.Where(x => x.Competition.Name == competition.Name);
                }

                var topGoalkeepers = await query
                .GroupBy(x => new { x.PlayerId, x.Player.Lastname, x.Player.Team.LogoUrl })
                .Select(g => new MostCleanSheetsDto
                {
                    PlayerId = g.Key.PlayerId,
                    PlayerName = g.Key.Lastname,
                    ClubLogoUrl = g.Key.LogoUrl,
                    MatchesPlayed = g.Sum(pcs => pcs.MatchesPlayed),
                    CleanSheets = g.Sum(pcs => pcs.CleanSheets)
                }).OrderByDescending(ts => ts.CleanSheets)
                .Take(10).ToListAsync();

                var query2 = db.PlayerCompetitionStats
                 .Include(x => x.Player).ThenInclude(p => p.Team)
                 .Where(x => x.Player.Position.ToLower() == "med");

                if (competition.Name != "" && competition.Name != null)
                {
                    query2 = query2.Where(x => x.Competition.Name == competition.Name);
                }
                var topMidfielders = await query2
                .GroupBy(x => new { x.PlayerId, x.Player.Lastname, x.Player.Team.LogoUrl })
                .Select(g => new TopMedioDto
                {
                    PlayerId = g.Key.PlayerId,
                    PlayerName = g.Key.Lastname,
                    ClubLogoUrl = g.Key.LogoUrl,
                    MatchesPlayed = g.Sum(pcs => pcs.MatchesPlayed),
                    PasesMedia = g.Average(pcs => pcs.CorrectPassesMedia),
                    Assists = g.Sum(pcs => pcs.Assists),
                    Media = g.Average(pcs => pcs.Media)
                }).OrderByDescending(ts => ts.Media)
                .Take(10).ToListAsync();

                return Results.Ok(new
                {
                    TopScorers = topScorers,
                    TopAssists = topAssists,
                    TopYellowCards = topYellowCards,
                    TopRedCards = topRedCards,
                    TopGoalkeepers = topGoalkeepers,
                    TopMidfielders = topMidfielders
                });
            });

            // Endpoint para obtener las estadísticas de los equipos en una liga
            app.MapGet("/api/leagues/{name}/team-stats", async (AppDbContext2 db, int? season, string competitionName) =>
            {
                IQueryable<TeamCompetitionStats> query = db.TeamCompetitionStats
                .Include(tcs => tcs.Team);

                var competition = await GetCompetitionByNameAsync(db, competitionName);
                if (competition != null)
                {
                    query = query.Where(tcs => tcs.Competition.Name == competition.Name);
                }
                else
                {
                    return Results.NotFound("No se encontró la competición.");

                }

                var topTeamScorer = await query
                .Select(tcs => new TopTeamScorerDto
                {
                    TeamId = tcs.Team.Id,
                    TeamName = tcs.Team.Name,
                    LogoUrl = tcs.Team.LogoUrl,
                    MatchesPlayed = tcs.MatchesPlayed,
                    TotalGoals = tcs.GoalsFor,
                }).OrderByDescending(ts => ts.TotalGoals)
                .Take(10).ToListAsync();

                IQueryable<TeamCompetitionStats> query2 = db.TeamCompetitionStats
                .Include(tcs => tcs.Team);

                if (competitionName != null && competitionName != "")
                {
                    query2 = query2.Where(tcs => tcs.Competition.Name == competitionName);
                }

                var temLessScored = await query2
                .Select(tcs => new LessGoalConcededDto
                {
                    TeamId = tcs.Team.Id,
                    TeamName = tcs.Team.Name,
                    LogoUrl = tcs.Team.LogoUrl,
                    MatchesPlayed = tcs.MatchesPlayed,
                    GoalsConceded = tcs.GoalsAgainst,
                }).OrderBy(ts => ts.GoalsConceded)
                .Take(10).ToListAsync();

                IQueryable<TeamCompetitionStats> query3 = db.TeamCompetitionStats
                .Include(tcs => tcs.Team);

                if (competitionName != null && competitionName != "")
                {
                    query3 = query3.Where(tcs => tcs.Competition.Name == competitionName);
                }

                var bestHomeTeam = await query3
                .Select(tcs => new BestHomeAwayDto
                {
                    TeamId = tcs.Team.Id,
                    TeamName = tcs.Team.Name,
                    LogoUrl = tcs.Team.LogoUrl,
                    Win = tcs.HomeWin,
                    Draw = tcs.HomeDraw,
                    Lose = tcs.HomeLose,
                    GoalsDifference = tcs.HomeGoalsFor - tcs.HomeGoalsAgainst,
                    Points = tcs.HomePoints
                }).OrderByDescending(ts => ts.Points)
                .Take(10).ToListAsync();

                var bestAwayTeam = await query3
                .Select(tcs => new BestHomeAwayDto
                {
                    TeamId = tcs.Team.Id,
                    TeamName = tcs.Team.Name,
                    LogoUrl = tcs.Team.LogoUrl,
                    Win = tcs.AwayWin,
                    Draw = tcs.AwayDraw,
                    Lose = tcs.AwayLose,
                    GoalsDifference = tcs.AwayGoalsFor - tcs.AwayGoalsAgainst,
                    Points = tcs.AwayPoints
                }).OrderByDescending(ts => ts.Points)
                .Take(10).ToListAsync();

                IQueryable<TeamCompetitionStats> query4 = db.TeamCompetitionStats
                .Include(tcs => tcs.Team);

                if (competitionName != null && competitionName != "")
                {
                    query4 = query4.Where(tcs => tcs.Competition.Name == competitionName);
                }

                var mostCardsTeam = await query4
                .Select(tcs => new TopTeamCardsDto
                {
                    TeamId = tcs.Team.Id,
                    TeamName = tcs.Team.Name,
                    LogoUrl = tcs.Team.LogoUrl,
                    MatchesPlayed = tcs.MatchesPlayed,
                    TotalCards = tcs.YellowCards + tcs.RedCards
                }).OrderByDescending(ts => ts.TotalCards)
                .Take(10).ToListAsync();

                IQueryable<Titles> queryMostTitles = db.Titles.Include(t => t.Team);

                if (competitionName != null && competitionName != "")
                {
                    queryMostTitles = queryMostTitles.Where(t => t.Competition.Name == competitionName);
                }

                var mostTitles = await queryMostTitles
                .GroupBy(t => new { t.Team.Id, t.Team.Name, t.Team.LogoUrl })
                .Select(g => new TopTeamTitlesDto
                {
                    TeamId = g.Key.Id,
                    TeamName = g.Key.Name,
                    LogoUrl = g.Key.LogoUrl,
                    TotalTitles = g.Count()
                }).OrderByDescending(mt => mt.TotalTitles)
                .Take(10).ToListAsync();

                return Results.Ok(new
                {
                    TopTeamScorer = topTeamScorer,
                    TeamLessScored = temLessScored,
                    BestHomeTeam = bestHomeTeam,
                    BestAwayTeam = bestAwayTeam,
                    MostCardsTeam = mostCardsTeam,
                    MostTitles = mostTitles
                });
            });
        }
    }
}
