namespace PlayVisionAPI.DTOs
{
    public class PlayerCompetitionStatsDto
    {
        public int CompetitionId { get; set; }
        public string CompetitionName { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;

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
