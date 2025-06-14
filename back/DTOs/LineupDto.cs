namespace PlayVisionAPI.DTOs
{
    public class LineupDto
    {
        public string Formation { get; set; } = string.Empty;
        public IEnumerable<LineupSlotDto> Slots { get; set; } = new List<LineupSlotDto>();
    }
}
