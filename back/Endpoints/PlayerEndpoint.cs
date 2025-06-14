using Microsoft.EntityFrameworkCore;
using PlayVisionAPI.Data;
using PlayVisionAPI.DTOs;

namespace PlayVisionAPI.Endpoints
{
    public static class PlayerEndpoint
    {
        public static void MapPlayerEndpoints(this WebApplication app)
        {
            app.MapGet("/api/players/{playerName}", async (AppDbContext2 db, string playerName, int? season) =>
        {

            if (season == null)
            {
                season = await db.Seasons.OrderByDescending(s => s.Year).Select(s => s.Id).FirstOrDefaultAsync();
            }
            
            var playerId = await db.Players
                .Where(p => p.Lastname == playerName || p.Name == playerName)
                .Select(p => p.Id)
                .FirstOrDefaultAsync();

            if (playerId == 0)
            {
                return Results.NotFound(new { Message = "Jugador no encontrado" });
            }

            var player = await db.Players
                .Where(p => p.Id == playerId)
                .Select(p => new PlayerDto
                {
                    Name = p.Lastname,
                    PhotoUrl = p.PhotoUrl,
                    Age = p.Age,
                    Height = p.Height,
                    Nationality = p.Nationality,
                    Dorsal = p.Dorsal,
                    Position = p.Position,
                    PreferredFoot = p.PreferredFoot,
                    TeamName = p.Team.Name,
                    TeamLogoUrl = p.Team.LogoUrl,

                }).FirstOrDefaultAsync();

            var playerSeasonStats = await db.PlayerCompetitionStats
                .Where(p => p.Player.Lastname == playerName && p.SeasonId == season)
                .Include(x => x.Competition)
                .Select(p => new PlayerCompetitionStatsDto
                {
                    CompetitionId = p.CompetitionId,
                    CompetitionName = p.Competition.Name,
                    LogoUrl = p.Competition.LogoUrl,
                    MatchesPlayed = p.MatchesPlayed,
                    Goals = p.Goals,
                    Assists = p.Assists,
                    Passes = p.CorrectPassesMedia,
                    YellowCards = p.YellowCards,
                    RedCards = p.RedCards,
                    Tackles = p.Tackles,
                    MinutesPlayed = p.MinutesPlayed,
                    CleanSheets = p.CleanSheets,
                    Media = p.Media
                })
                .ToListAsync();

            var playerNationalTeamStats = await db.PlayerCompetitionStats
                .Where(p => p.Player.Lastname == playerName && p.SeasonId == season && p.Competition.Type == "national")
                .Include(x => x.Competition)
                .Select(p => new PlayerNationalStatsDto
                {
                    CompetitionId = p.CompetitionId,
                    CompetitionName = p.Competition.Name,
                    LogoUrl = p.Competition.LogoUrl,
                    MatchesPlayed = p.MatchesPlayed,
                    Goals = p.Goals,
                    Assists = p.Assists,
                    Passes = p.CorrectPassesMedia,
                    YellowCards = p.YellowCards,
                    RedCards = p.RedCards,
                    Tackles = p.Tackles,
                    MinutesPlayed = p.MinutesPlayed,
                    CleanSheets = p.CleanSheets,
                    Media = p.Media
                })
                .ToListAsync();

            var playerTrajectory = await db.PlayerCompetitionStats
                .Where(p => p.Player.Lastname == playerName)
                .Include(x => x.Season)
                .Include(x => x.Player).ThenInclude(p => p.Team)
                .GroupBy(x => new { x.SeasonId, x.Season.Year, x.Player.Team.LogoUrl })
                .Select(g => new SeasonTrajectoryDto
                {
                    SeasonYear = g.Key.Year,
                    TeamLogoUrl = g.Key.LogoUrl,
                    MatchesPlayed = g.Sum(x => x.MatchesPlayed),
                    Goals = g.Sum(x => x.Goals),
                    Assists = g.Sum(x => x.Assists),
                    Passes = g.Sum(x => x.CorrectPassesMedia),
                    YellowCards = g.Sum(x => x.YellowCards),
                    RedCards = g.Sum(x => x.RedCards),
                    Tackles = g.Sum(x => x.Tackles),
                    MinutesPlayed = g.Sum(x => x.MinutesPlayed),
                    CleanSheets = g.Sum(x => x.CleanSheets),
                    Media = g.Average(x => x.Media)
                }).OrderBy(x => x.SeasonYear)
                .ToListAsync();

            return Results.Ok(new
            {
                PlayerInfo = player,
                PlayerSeasonStats = playerSeasonStats,
                PlayerNationalTeamStats = playerNationalTeamStats,
                PlayerTrajectory = playerTrajectory
            });
        });

        }
    }
}
