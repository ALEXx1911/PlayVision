namespace PlayVisionAPI.DTOs
{
    public class TopScorerDto
    {
        public int PlayerId { get; set; }
        public string PlayerName { get; set; } = string.Empty;
        public string ClubLogoUrl { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; } 
        public int Penalties { get; set; }
        public int TotalGoals { get; set; } 
    }
}
