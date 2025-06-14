namespace PlayVisionAPI.Models
{
    public class PlayerSeasonStat
    {
        public int Id { get; set; } 
        public int SeasonId { get; set; }
        public int PlayerId { get; set; }
        public int TeamId { get; set; }
        public string Position { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; }
        public int Goals { get; set; }
        public int HeadGoals { get; set; }
        public int PenaltyGoals { get; set; }
        public int FreekickGoals { get; set; }
        public int Assists { get; set; }
        public int YellowCards { get; set; }
        public int RedCards { get; set; }
        public decimal Media { get; set; }
        public decimal TotalPassMedia { get; set; }
        public decimal RecoveriesMedia { get; set; }
        public int CleanSheets { get; set; }

        // Propiedades de navegación para las relaciones
        public Player? Player { get; set; }
        public Team? Team { get; set; }
        public Season? Season { get; set; }
    }
}
