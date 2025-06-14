namespace PlayVisionAPI.DTOs
{
    public class MatchDetailDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string InitTime { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Stadium { get; set; } = string.Empty;

        public TeamScoreDto HomeTeam { get; set; } = default!;
        public StandingDto? HomeLeaguePosition { get; set; } = default!;
        public LineupDto? HomeLineup { get; set; } = default!;
        public IEnumerable<MatchSummaryDto> HomeLastFiveMatches { get; set; } = new List<MatchSummaryDto>();
        
        public TeamScoreDto AwayTeam { get; set; } = default!;
        public StandingDto? AwayLeaguePosition { get; set; } = default!;
        public LineupDto? AwayLineup { get; set; } = default!;
        public IEnumerable<MatchSummaryDto> AwayLastFiveMatches { get; set; } = new List<MatchSummaryDto>();
        public IEnumerable<PlayerMatchStatsDto> HomePlayerStats { get; set; } = new List<PlayerMatchStatsDto>();
        public IEnumerable<PlayerMatchStatsDto>? PlayerStats { get; set; }

        public IEnumerable<EventDto>? Events { get; set; } = new List<EventDto>();
        public IEnumerable<MatchStatisticsDto>? Statistics { get; set; } = new List<MatchStatisticsDto>();
        public IEnumerable<HeatmapPointDto>? HomeHeatmap { get; set; } = new List<HeatmapPointDto>();
        public IEnumerable<HeatmapPointDto>? AwayHeatmap { get; set; } = new List<HeatmapPointDto>();
    }
}
