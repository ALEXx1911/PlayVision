namespace PlayVisionAPI.DTOs
{
    public class LineupSlotDto
    {
        public int Slot { get; set; }
        public int PlayerId { get; set; }
        public string PlayerName { get; set; } = string.Empty;
        public string PlayerPhotoUrl { get; set; } = string.Empty;

    }
}
