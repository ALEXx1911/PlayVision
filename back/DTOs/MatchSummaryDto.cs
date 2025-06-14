namespace PlayVisionAPI.DTOs
{
    public class MatchSummaryDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; } = string.Empty;
        public string? RoundName { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public string InitTime { get; set; } = string.Empty;
        public TeamScoreDto HomeTeam { get; set; } = default!;
        public TeamScoreDto AwayTeam { get; set; } = default!;
        
        public IEnumerable<PlayerMatchStatsDto>? PlayerStats { get; set; } = new List<PlayerMatchStatsDto>();
        public IEnumerable<EventDto>? Events { get; set; } = new List<EventDto>();
        public IEnumerable<MatchStatisticsDto>? Statistics { get; set; } = new List<MatchStatisticsDto>();
    }
}
