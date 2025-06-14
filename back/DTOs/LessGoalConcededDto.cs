namespace PlayVisionAPI.DTOs
{
    public class LessGoalConcededDto
    {
        public int TeamId { get; set; }
        public string TeamName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; }
        public int GoalsConceded { get; set; }
    }
}
