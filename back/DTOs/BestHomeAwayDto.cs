namespace PlayVisionAPI.DTOs
{
    public class BestHomeAwayDto
    {
        public int TeamId { get; set; }
        public string TeamName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public int Win { get; set; }
        public int Draw { get; set; }
        public int Lose { get; set; }
        public int GoalsDifference { get; set; }
        public int Points { get; set; }
    }
}
