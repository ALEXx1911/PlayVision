namespace PlayVisionAPI.DTOs
{
    public class TopMedioDto
    {
        public int PlayerId { get; set; }
        public string PlayerName { get; set; } = string.Empty;
        public string ClubLogoUrl { get; set; } = string.Empty;
        public int MatchesPlayed { get; set; }
        public decimal PasesMedia { get; set; }
        public int Assists { get; set; }
        public decimal Media { get; set; }
    }
}
