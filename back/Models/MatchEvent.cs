namespace PlayVisionAPI.Models
{
    public class MatchEvent
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; } = default!;
        public string EventType { get; set; } = string.Empty;
        public int EventMinute { get; set; }

        public int? PlayerId { get; set; }
        public Player? Player { get; set; } = null;
        public int? AssistId { get; set; }
        public Player? Assist { get; set; } = null;

        public int? Substitution_in_id { get; set; }
        public Player? Substitution_in { get; set; } = null;

        public int? Substitution_out_id { get; set; }
        public Player? Substitution_out { get; set; } = null;

    }
}
