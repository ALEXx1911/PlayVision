namespace PlayVisionAPI.DTOs
{
    public class TopTeamScorerDto
    {
        public int TeamId { get; set; }
        public string TeamName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; }
        public int PenaltyGoals { get; set; }
        public int TotalGoals { get; set; }
    }
}
