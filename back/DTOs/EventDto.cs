namespace PlayVisionAPI.DTOs
{
    public class EventDto
    {
        public string EventType { get; set; } = string.Empty;
        public int EventMinute { get; set; }
        public string? PlayerName { get; set; }
        public string? AssistName { get; set; }
        public string? SubstitutionInName { get; set; }
        public string? SubstitutionOutName { get; set; }

    }
}
