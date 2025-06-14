namespace PlayVisionAPI.DTOs
{
    public class TopTeamCardsDto
    {
        public int TeamId { get; set; }
        public string TeamName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; }
        public int TotalCards { get; set; }
    }
}
