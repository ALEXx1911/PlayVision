namespace PlayVisionAPI.Models
{
    public class LineupSlot
    {
        public int Id { get; set; }
        public int LineupId { get; set; }
        public Lineup Lineup { get; set; } = default!;
        public short Slot { get; set; }
        public int PlayerId { get; set; }
        public Player Player { get; set; } = default!;
    }
}
