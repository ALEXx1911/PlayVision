namespace PlayVisionAPI.Models
{
    public class PlayerCompetitionStats
    {
        public int Id { get; set; }
        public int player_id { get; set; }
        public Player Player { get; set; } = default!;
        public int competition_id { get; set; }
        public Competition Competition { get; set; } = default!;
        public int SeasonId { get; set; }
        public Season Season { get; set; } = default!;

        public int matches_played { get; set; }
        public int goals { get; set; }
        public int assists { get; set; }
        public decimal correct_passes_media { get; set; }
        public int yellow_cards { get; set; }
        public int red_cards { get; set; }
        public int tackles { get; set; }
        public int minutes_played { get; set; }
        public int clean_sheets { get; set; }
        public decimal media { get; set; }

    }
}
