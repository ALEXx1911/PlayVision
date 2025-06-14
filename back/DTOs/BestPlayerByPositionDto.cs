namespace PlayVisionAPI.DTOs
{
    public class BestPlayerByPositionDto
    {
        public string Position { get; set; } = string.Empty;
        public PlayerDto Player { get; set; } = default!;
    }
}
