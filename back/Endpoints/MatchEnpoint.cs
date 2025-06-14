using Microsoft.EntityFrameworkCore;
using PlayVisionAPI.Data;
using PlayVisionAPI.DTOs;

namespace PlayVisionAPI.Endpoints
{
    public static class MatchEnpoint
    {
        public static TResult Let<T, TResult>(this T value, Func<T, TResult> func)
        => func(value);
        public static void MapMatchEndpoints( this WebApplication app)
        {
            var now = DateTime.UtcNow;

            app.MapGet("/api/mathches/{id:int}", async (AppDbContext2 db, int id) =>
{
    var now = DateTime.UtcNow;

    var match = await db.Matches
    .Where(m => m.Id == id)
    .Include(m => m.HomeTeam)
    .Include(m => m.AwayTeam)
    .Include(m => m.Round)
    .ThenInclude(r => r.Season)
    .Include(m => m.Lineups)
    .ThenInclude(l => l.Slots)
    .ThenInclude(s => s.Player)
    .FirstOrDefaultAsync();

    var homeTeamLeaguePosition = await db.TeamSeasonStats
        .Where(ts => ts.Season.Year == match.Season.Year)
        .Include(ts => ts.Team)
        .OrderBy(ts => ts.Points)
        .ThenBy(ts => ts.GoalsDifference)
        .ThenByDescending(ts => ts.GoalsFavor)
        .ToListAsync();

    if (match == null)
    {
        return Results.NotFound();
    }

    static IQueryable<MatchSummaryDto> GetLastFiveMatches(AppDbContext2 db, int teamId) =>

        db.Matches
            .Where(m => (m.HomeTeamId == teamId || m.AwayTeamId == teamId) && m.MatchDate < DateTime.UtcNow)
            .OrderByDescending(m => m.MatchDate)
            .Take(5)
            .Select(m => new MatchSummaryDto
            {
                Id = m.Id,
                Date = m.MatchDate,
                Status = m.Status,
                Description = m.Description,
                RoundName = m.Round.Name,
                HomeTeam = new TeamScoreDto
                {
                    Id = m.HomeTeamId,
                    Name = m.HomeTeam.Name,
                    Score = m.HomeGoals
                },
                AwayTeam = new TeamScoreDto
                {
                    Id = m.AwayTeamId,
                    Name = m.AwayTeam.Name,
                    Score = m.AwayGoals
                },
                InitTime = m.MatchDate.ToLocalTime().ToString("HH:mm"),

            });

    var baseDto = new MatchDetailDto
    {
        Id = match.Id,
        Date = match.MatchDate,
        InitTime = match.MatchDate.ToLocalTime().ToString("HH:mm"),
        Status = match.Status,
        Stadium = match.Stadium ?? string.Empty,
        HomeTeam = new TeamScoreDto
        {
            Id = match.HomeTeamId,
            Name = match.HomeTeam.Name,
            Score = match.HomeGoals
        },
        AwayTeam = new TeamScoreDto
        {
            Id = match.AwayTeamId,
            Name = match.AwayTeam.Name,
            Score = match.AwayGoals
        },
        HomeLineup = match.Lineups
       .FirstOrDefault(l => l.TeamId == match.HomeTeamId)
       ?.Let(l => new LineupDto
       {
           Formation = l.Formation,
           Slots = l.Slots.OrderBy(s => s.Slot)
           .Select(s => new LineupSlotDto
           {
               Slot = s.Slot,
               PlayerId = s.PlayerId,
               PlayerName = s.Player.Name,
               PlayerPhotoUrl = s.Player.PhotoUrl
           })
       }),
        AwayLineup = match.Lineups
         .FirstOrDefault(l => l.TeamId == match.AwayTeamId)
            ?.Let(l => new LineupDto
            {
                Formation = l.Formation,
                Slots = l.Slots.OrderBy(s => s.Slot)
                .Select(s => new LineupSlotDto
                {
                    Slot = s.Slot,
                    PlayerId = s.PlayerId,
                    PlayerName = s.Player.Name,
                    PlayerPhotoUrl = s.Player.PhotoUrl
                })
            }),
        HomeLastFiveMatches = await GetLastFiveMatches(db, match.HomeTeamId).ToListAsync(),
        AwayLastFiveMatches = await GetLastFiveMatches(db, match.AwayTeamId).ToListAsync(),
    };

    if (match.Status == "finished")
    {
        baseDto.Events = await db.MatchEvents
            .Where(e => e.MatchId == id)
            .OrderBy(e => e.EventMinute)
            .Select(e => new EventDto
            {
                EventType = e.EventType,
                EventMinute = e.EventMinute,
                PlayerName = e.Player != null ? e.Player.Lastname : null,
                AssistName = e.Assist != null ? e.Assist.Lastname : null,
                SubstitutionInName = e.Substitution_in != null ? e.Substitution_in.Lastname : null,
                SubstitutionOutName = e.Substitution_out != null ? e.Substitution_out.Lastname : null
            })
            .ToListAsync();

        baseDto.Statistics = await db.MatchStats
            .Where(s => s.MatchId == id)
            .Select(s => new MatchStatisticsDto
            {
                Id = s.team_id,
                TeamName = s.Team.Name,
                LogoUrl = s.Team.LogoUrl,
                Goals = s.Goals,
                Shots = s.Shots,
                ShotsOnTarget = s.ShotsOnTarget,
                Corners = s.Corners,
                Possession = s.Possession,
                Passes = s.Passes,
                Fouls = s.Fouls,
                YellowCards = s.YellowCards,
                RedCards = s.RedCards,
                Offsides = s.Offsides
            })
            .ToListAsync();
    }
    else
    {
        baseDto.Events = null;
        baseDto.Statistics = null;
    }
    if (match.Status == "finished")
    {
        var stats = await db.PlayerMatchStats
            .Where(s => s.MatchId == id)
            .Include(s => s.Player)
            .Select(s => new PlayerMatchStatsDto
            {
                PlayerId = s.PlayerId,
                FullName = s.Player.Lastname,
                PhotoUrl = s.Player.PhotoUrl,
                Shots = s.Shots,
                ShotsOnTarget = s.ShotsOnTarget,
                Fouls = s.Fouls,
                Dribbles = s.Dribbles,
                Corners = s.Corners,
                Passes = s.Passes,
                PassesCorrect = s.Passes,
                Media = s.Media,

                Scored = db.MatchEvents
                                         .Any(e => e.MatchId == id && e.EventType == "goal" && e.PlayerId == s.PlayerId),
                GotYellowCard = db.MatchEvents
                                         .Any(e => e.MatchId == id && e.EventType == "yellow_card" && e.PlayerId == s.PlayerId),
                GotRedCard = db.MatchEvents
                                         .Any(e => e.MatchId == id && e.EventType == "red_card" && e.PlayerId == s.PlayerId)
            })
            .ToListAsync();

        baseDto.PlayerStats = stats;
    }
    else
    {
        baseDto.PlayerStats = null;
    }
    if (match.Status == "finished")
    {
        baseDto.HomeHeatmap = await db.MatchHeatmapPoints
            .Where(h => h.MatchId == id && h.TeamId == match.HomeTeamId)
            .Select(h => new HeatmapPointDto
            {
                XCoord = h.XCoord,
                YCoord = h.YCoord,
                Intensity = h.Intensity
            })
            .ToListAsync();

        baseDto.AwayHeatmap = await db.MatchHeatmapPoints
            .Where(h => h.MatchId == id && h.TeamId == match.AwayTeamId)
            .Select(h => new HeatmapPointDto
            {
                XCoord = h.XCoord,
                YCoord = h.YCoord,
                Intensity = h.Intensity
            })
            .ToListAsync();
    }
    else
    {
        baseDto.HomeHeatmap = null;
        baseDto.AwayHeatmap = null;
    }

    return Results.Ok(baseDto);

}).WithName("GetMatchDetailsById");
            
        }
    }
}
