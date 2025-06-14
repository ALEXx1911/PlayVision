using PlayVisionAPI.Models;

namespace PlayVisionAPI.DTOs
{
    public class PlayerDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string PhotoUrl { get; set; } = string.Empty;
        public int Age { get; set; }
        public decimal Height { get; set; }
        public string Nationality { get; set; } = string.Empty;
        public double Media { get; set; }
        public int Dorsal { get; set; }
        public string Position { get; set; } = string.Empty;
        public string PreferredFoot { get; set; } = string.Empty;
        public string TeamName { get; set; } = string.Empty;
        public string TeamLogoUrl { get; set; } = string.Empty;

        public int MatchesPlayed { get; set; }
        public int MinutesPlayed { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public decimal Passes { get; set; }
        public int YellowCards { get; set; }
        public int RedCards { get; set; }
        public decimal RecoveriesMedia { get; set; }

        public ICollection<PlayerCompetitionStats> CompetitionStats { get; set; } = new List<PlayerCompetitionStats>();

    }
}
