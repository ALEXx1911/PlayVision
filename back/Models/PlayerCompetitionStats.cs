namespace PlayVisionAPI.Models
{
    public class PlayerCompetitionStats
    {
        public int Id { get; set; }
        public int PlayerId { get; set; }
        public Player Player { get; set; } = default!;
        public int CompetitionId { get; set; }
        public Competition Competition { get; set; } = default!;
        public int SeasonId { get; set; }
        public Season Season { get; set; } = default!;

        public int MatchesPlayed { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public decimal CorrectPassesMedia { get; set; }
        public int YellowCards { get; set; }
        public int RedCards { get; set; }
        public int Tackles { get; set; }
        public int MinutesPlayed { get; set; }
        public int CleanSheets { get; set; }
        public decimal Media { get; set; }

    }
}
