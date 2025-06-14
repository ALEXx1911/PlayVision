namespace PlayVisionAPI.DTOs
{
    public class PlayerMatchStatsDto
    {
        public int PlayerId { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string PhotoUrl { get; set; } = string.Empty;

        public int Shots { get; set; }
        public int ShotsOnTarget { get; set; }
        public int Fouls { get; set; }
        public int Dribbles { get; set; }
        public int Corners { get; set; }
        public int Passes { get; set; }
        public decimal PassesCorrect { get; set; }
        public decimal Media { get; set; }

        public bool Scored { get; set; }
        public bool GotYellowCard { get; set; }
        public bool GotRedCard { get; set; }
    }
}
