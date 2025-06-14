using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlayVisionAPI.Data;
using PlayVisionAPI.DTOs;

namespace PlayVisionAPI.Endpoints
{
    public static class TeamEndpoint
    {
        public static void MapTeamEndpoints(this WebApplication app)
        {
                var now = DateTime.UtcNow;
                app.MapGet("/api/teams/{name}", async (AppDbContext2 db, string name) =>
            {
                var teams = await db.Teams.Where(t => t.Name.ToLower() == name.ToLower())
                .Select(t => new TeamDto
                {
                    Id = t.Id,
                    Name = t.Name,
                    LogoUrl = t.LogoUrl,
                    ShortName = t.Shortname,

                    LastFiveMatches = t.HomeMatches
                    .Concat(t.AwayMatches)
                    .Where(m => m.MatchDate < now)
                    .OrderByDescending(m => m.MatchDate)
                    .Take(5)
                    .Select(m => new MatchSummaryDto
                    {
                        Id = m.Id,
                        Date = m.MatchDate,
                        Status = m.Status,
                        HomeTeam = new TeamScoreDto
                        {
                            Id = m.HomeTeam.Id,
                            Name = m.HomeTeam.Name,
                            Score = m.HomeGoals,
                        },
                        AwayTeam = new TeamScoreDto
                        {
                            Id = m.AwayTeam.Id,
                            Name = m.AwayTeam.Name,
                            Score = m.AwayGoals,
                        },
                        RoundName = m.Round.Name,
                        Description = m.Description,
                        InitTime = m.MatchDate.ToString("HH:mm")

                    }),

                    NextFiveMatches = t.HomeMatches
                    .Concat(t.AwayMatches)
                    .Where(m => m.MatchDate >= now)
                    .OrderBy(m => m.MatchDate)
                    .Take(5)
                    .Select(m => new MatchSummaryDto
                    {
                        Id = m.Id,
                        Date = m.MatchDate,
                        Status = m.Status,
                        HomeTeam = new TeamScoreDto
                        {
                            Id = m.HomeTeam.Id,
                            Name = m.HomeTeam.Name,
                            Score = m.HomeGoals,
                        },
                        AwayTeam = new TeamScoreDto
                        {
                            Id = m.AwayTeam.Id,
                            Name = m.AwayTeam.Name,
                            Score = m.AwayGoals,
                        },
                        RoundName = m.Round.Name,
                        Description = m.Description,
                        InitTime = m.MatchDate.ToString("HH:mm")
                    }),

                    ActualXi = t.Players
                    .GroupBy(p => p.Position)
                    .Select(g => g.OrderByDescending(p => p.Media)
                    .ThenBy(p => p.Lastname)
                    .Select(p => new BestPlayerByPositionDto
                    {
                        Position = g.Key,
                        Player = new PlayerDto
                        {
                            Id = p.Id,
                            Name = p.Name,
                            PhotoUrl = p.PhotoUrl,
                            Position = p.Position,
                            Media = p.Media,
                        }
                    }).First()
                    )


                }).FirstOrDefaultAsync();
                return teams is not null ? Results.Ok(teams) : Results.NotFound();
            }).WithName("GetTeamByName");

            app.MapGet("/api/teams/{name}/squad", async (AppDbContext2 db, string teamName, int? year) =>
            {
                var season = year.HasValue
                    ? await db.Seasons.FirstOrDefaultAsync(s => s.Year == year)
                    : await db.Seasons.OrderByDescending(s => s.Year).FirstOrDefaultAsync();
                if (season == null)
                {
                    return Results.NotFound("La temporada no se encuenta");
                }
                var team = await db.Teams
                    .Include(t => t.Players)
                    .Where(t => t.Name.ToLower() == teamName.ToLower())
                    .FirstOrDefaultAsync();

                var playersIds = team?.Players.Select(p => p.Id).ToList();

                var playerStats = await db.PlayerSeasonStats
                    .Where( ps => playersIds.Contains(ps.PlayerId) && ps.SeasonId == season.Id)
                    .ToListAsync();

            var squad = team.Players.Select(p =>
            {
                var stats = playerStats.FirstOrDefault(st => st.PlayerId == p.Id);
                return new PlayerDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    PhotoUrl = p.PhotoUrl,
                    Age = p.Age,
                    Height = p.Height,
                    Nationality = p.Nationality,
                    Dorsal = p.Dorsal,
                    Position = p.Position,
                    PreferredFoot = p.PreferredFoot,
                    TeamName = team.Name,
                    TeamLogoUrl = team.LogoUrl,
                    MatchesPlayed = stats?.MatchesPlayed ?? 0,
                    MinutesPlayed = stats?.MinutesPlayed ?? 0,
                    Goals = stats?.Goals ?? 0,
                    Assists = stats?.Assists ?? 0,
                    Passes = stats?.TotalPassMedia ?? 0,
                    YellowCards = stats?.YellowCards ?? 0,
                    RedCards = stats?.RedCards ?? 0,
                    RecoveriesMedia = stats?.RecoveriesMedia ?? 0,

                };
            }).ToList();
                return squad.Any() ? Results.Ok(squad) : Results.NotFound("No hay squad disponible");

        }).WithName("GetTeamSquad");

            app.MapGet("/api/teams/{name}/titles", async (AppDbContext2 db, string name) =>
            {
                var team = await db.Teams
                    .Where(t => t.Name.ToLower() == name.ToLower())
                    .Select(t => new
                    {
                        t.Id
                    })
                    .FirstOrDefaultAsync();
                var titles = await db.Titles
                    .Where(t => t.TeamId == team.Id)
                    .Include(t => t.Competition)
                    .Include(t => t.Season)
                    .GroupBy(t => new
                    {
                        t.Competition.Id,
                        t.Competition.Name,
                        t.Competition.LogoUrl,
                        t.Season.Year
                    })
                    .Select(g => new CompetitionTitleDto
                    {
                        CompetitionId = g.Key.Id,
                        CompetitionName = g.Key.Name,
                        LogoUrl = g.Key.LogoUrl,
                        SeasonYear = g.Key.Year,
                        Wins = g.Count()
                    })
                    .OrderBy(ch => ch.CompetitionName)
                    .ThenByDescending(ch => ch.SeasonYear)
                    .ToListAsync();

                return titles.Any() ? Results.Ok(titles) : Results.NotFound();
            }).WithName("GetTeamTitles");
            
        }
    }
}
