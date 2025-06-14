namespace PlayVisionAPI.Models
{
    public class PlayerSeasonStat
    {
        public int id { get; set; } 
        public int season_id { get; set; }
        public int player_id { get; set; }
        public int team_id { get; set; }
        public string position { get; set; } = string.Empty;
        public int matches_played { get; set; }
        public int goals { get; set; }
        public int head_goals { get; set; }
        public int penalty_goals { get; set; }
        public int freekick_goals { get; set; }
        public int assists { get; set; }
        public int yellow_cards { get; set; }
        public int red_cards { get; set; }
        public decimal media { get; set; }
        public decimal total_pass_media { get; set; }
        public decimal recoveries_media { get; set; }
        public int cleansheets { get; set; }

        // Propiedades de navegación para las relaciones
        public Player? Player { get; set; }
        public Team? Team { get; set; }
        public Season? Season { get; set; }
    }
}
