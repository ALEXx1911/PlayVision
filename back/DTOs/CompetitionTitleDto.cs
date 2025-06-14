namespace PlayVisionAPI.DTOs
{
    public class CompetitionTitleDto
    {
        public int CompetitionId { get; set; }
        public string CompetitionName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public int SeasonYear { get; set; }
        public int Wins { get; set; }
    }
}
