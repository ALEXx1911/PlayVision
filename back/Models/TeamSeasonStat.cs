namespace PlayVisionAPI.Models
{
    public class TeamSeasonStat
    {
        public int Id { get; set; }
        public int SeasonId { get; set; }
        public int TeamId { get; set; }
        public int MatchesPlayed { get; set; }
        public int Win { get; set; }
        public int Draw { get; set; }
        public int Lose { get; set; }
        public int GoalsFavor { get; set; }
        public int GoalsAgainst { get; set; }
        public int GoalsDifference { get; set; }
        public double Points { get; set; }

        // Propiedades de navegación para las relaciones
        public Team? Team { get; set; }
        public Season? Season { get; set; }
    }
}
