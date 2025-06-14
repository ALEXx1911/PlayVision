namespace PlayVisionAPI.DTOs
{
    public class TopAssiterDto
    {
        public int PlayerId { get; set; }
        public string PlayerName { get; set; } = string.Empty;
        public string PlayerPhotoUrl { get; set; } = string.Empty;
        public string ClubLogoUrl { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; }
        public int TotalAssists { get; set; }
    }
}
