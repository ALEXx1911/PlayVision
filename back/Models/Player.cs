namespace PlayVisionAPI.Models
{
    public class Player
    {
        public int Id { get; set; }
        public Team Team { get; set; } = new Team();
        public string Name { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public int Age { get; set; }
        public decimal Height { get; set; }
        public string Nationality { get; set; } = string.Empty;
        public int Dorsal { get; set; }
        public string Position { get; set; } = string.Empty;
        public string PreferredFoot { get; set; } = string.Empty;
        public string PhotoUrl { get; set; } = string.Empty;
        public int CurrentTeamId { get; set; }
        public double Media { get; set; }

        public ICollection<PlayerMatchStats> MatchStats { get; set; } = new List<PlayerMatchStats>();
        public ICollection<PlayerCompetitionStats> CompetitionStats { get; set; } = new List<PlayerCompetitionStats>();
    }
}
