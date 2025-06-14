namespace PlayVisionAPI.DTOs
{
    public class MostYellowCardDto
    {
        public int PlayerId { get; set; }
        public string PlayerName { get; set; } = string.Empty;
        public string ClubLogoUrl { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; }
        public int YellowCards { get; set; }
    }
}
