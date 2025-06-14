using Microsoft.EntityFrameworkCore;
using PlayVisionAPI.Data;
using PlayVisionAPI.DTOs;
using PlayVisionAPI.Models;

namespace PlayVisionAPI.Endpoints
{
    public static class CompetitionEndpoint
    {
        public static void MapCompetitionEndpoints(this WebApplication app)
        {
            app.MapGet("/api/competitions", async (AppDbContext2 db, int? season) =>
        {
            Season? pseason;
            if (season.HasValue)
            {
                pseason = await db.Seasons.FirstOrDefaultAsync(s => s.Year == season.Value);
            }else
            {
                pseason = await db.Seasons.OrderByDescending(s => s.Year).FirstOrDefaultAsync();
            }

            int? seasonId = season ?? pseason?.Id;

            var competitions = await db.Competitions
            .Select(c => new CompetitionDto
            {
                CompetitionId = c.Id,
                CompetitionName = c.Name,
                LogoUrl = c.LogoUrl,
                Type = c.Type,
                Standings = null
            }).ToListAsync();

            if (seasonId.HasValue)
            {
                var leagueStats = await db.TeamSeasonStats
                    .Where(s => s.SeasonId == seasonId.Value)
                    .Include(s => s.Team)
                    .ToListAsync();

                foreach (var comp in competitions.Where(c => c.Type == "league"))
                {
                    var stats = leagueStats
                    .Where(s => s.Team.TeamCompetitionStats
                        .Any(ts => ts.CompetitionId == comp.CompetitionId && ts.SeasonId == seasonId.Value))
                    .OrderByDescending(s => s.Points)
                    .ThenByDescending(s => s.GoalsDifference)
                    .ThenByDescending(s => s.GoalsFavor)
                    .ToList();

                    var standingDtos = stats
                                .Select(s => new StandingDto
                                {
                                    TeamId = s.TeamId,
                                    TeamName = s.Team.Name,
                                    LogoUrl = s.Team.LogoUrl,
                                    MatchesPlayed = s.MatchesPlayed,
                                    Win = s.Win,
                                    Draw = s.Draw,
                                    Lose = s.Lose,
                                    GoalsFor = s.GoalsFavor,
                                    GoalsAgainst = s.GoalsAgainst,
                                    GoalDifference = s.GoalsDifference,
                                    Points = s.Points
                                })
                                .ToList();

                    for (int i = 0; i < standingDtos.Count; i++)
                        standingDtos[i].Position = i + 1;

                    comp.Standings = standingDtos;
                }
            }
            return Results.Ok(competitions);
        })
            .WithName("GetAllCompetitions");
        }
    }
}
