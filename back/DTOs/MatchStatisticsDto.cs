namespace PlayVisionAPI.DTOs
{
    public class MatchStatisticsDto
    {
        public int Id { get; set; }
        public string TeamName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public int Goals { get; set; }
        public int Shots { get; set; }
        public int ShotsOnTarget { get; set; }
        public int Corners { get; set; }
        public decimal Possession { get; set; }
        public int Passes { get; set; }
        public int Fouls { get; set; }
        public int YellowCards { get; set; }
        public int RedCards { get; set; }
        public int Offsides { get; set; }
    }
}
