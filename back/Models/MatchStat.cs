namespace PlayVisionAPI.Models
{
    public class MatchStat
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; } = default!;
        public int team_id { get; set; }
        public Team Team { get; set; } = default!;
        public string team_name { get; set; } = string.Empty;
        public int goals { get; set; }
        public int shots { get; set; }
        public int shots_on_target { get; set; }
        public int corners { get; set; }
        public decimal possession { get; set; }
        public int passes { get; set; }
        public int fouls { get; set; }
        public int yellow_cards { get; set; }
        public int red_cards { get; set; }
        public int offsides { get; set; }

    }
}
