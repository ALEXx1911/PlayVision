namespace PlayVisionAPI.DTOs
{
    public class TopTeamTitlesDto
    {
        public int TeamId { get; set; }
        public string TeamName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public int TotalTitles { get; set; }
    }
}
