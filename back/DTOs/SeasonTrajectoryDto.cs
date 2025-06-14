namespace PlayVisionAPI.DTOs
{
    public class SeasonTrajectoryDto
    {
        public int SeasonYear { get; set; }
        public string TeamLogoUrl { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public decimal Passes { get; set; }
        public int YellowCards { get; set; }
        public int RedCards { get; set; }
        public int Tackles { get; set; }
        public int MinutesPlayed { get; set; }
        public int CleanSheets { get; set; }
        public decimal Media { get; set; }

    }
}
