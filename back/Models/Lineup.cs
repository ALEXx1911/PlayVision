namespace PlayVisionAPI.Models
{
    public class Lineup
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; } = default!;
        public int TeamId { get; set; }
        public Team Team { get; set; } = default!;

        public string Formation { get; set; } = string.Empty;
        public ICollection<LineupSlot> Slots { get; set; } = new List<LineupSlot>();
    }
}
