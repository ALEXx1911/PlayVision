namespace PlayVisionAPI.DTOs
{
    public class CompetitionDto
    {
        public int CompetitionId { get; set; }
        public string CompetitionName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;

        public IEnumerable<StandingDto> Standings { get; set; } = new List<StandingDto>();
    }
}
