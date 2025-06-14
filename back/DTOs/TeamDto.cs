namespace PlayVisionAPI.DTOs
{
    public class TeamDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string ShortName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public string Stadium { get; set; } = string.Empty;
        public string Coach { get; set; } = string.Empty;

        public IEnumerable<MatchSummaryDto> LastFiveMatches { get; set; } = new List<MatchSummaryDto>();
        public IEnumerable<MatchSummaryDto> NextFiveMatches { get; set; } = new List<MatchSummaryDto>();
        public IEnumerable<BestPlayerByPositionDto> ActualXi { get; set; } = new List<BestPlayerByPositionDto>();
        public IEnumerable<CompetitionTitleDto> Titles { get; set; } = new List<CompetitionTitleDto>();
    }
}
