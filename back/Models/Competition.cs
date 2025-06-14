namespace PlayVisionAPI.Models
{
    public class Competition
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public string ClubTournamentType { get; set; } = string.Empty;

        //Relaciones
        public ICollection<PlayerCompetitionStats> PlayerStats { get; set; } = new List<PlayerCompetitionStats>();
        public ICollection<TeamCompetitionStats> TeamStats { get; set; } = new List<TeamCompetitionStats>();
        public ICollection<CompetitionRound> Rounds { get; set; } = new List<CompetitionRound>();
        public ICollection<Titles> Titles { get; set; } = new List<Titles>();
    }
}
