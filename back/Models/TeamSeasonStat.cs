namespace PlayVisionAPI.Models
{
    public class TeamSeasonStat
    {
        public int id { get; set; }
        public int season_id { get; set; }
        public int team_id { get; set; }
        public int matches_played { get; set; }
        public int win { get; set; }
        public int draw { get; set; }
        public int lose { get; set; }
        public int goals_favor { get; set; }
        public int goals_against { get; set; }
        public int goals_difference { get; set; }
        public double points { get; set; }

        // Propiedades de navegación para las relaciones
        public Team? Team { get; set; }
        public Season? Season { get; set; }
    }
}
