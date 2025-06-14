namespace PlayVisionAPI.Models
{
    public class Competition
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;
        public string type { get; set; } = string.Empty;
        public string country { get; set; } = string.Empty;
        public string logo_url { get; set; } = string.Empty;
        public string club_tournament_type { get; set; } = string.Empty;

        //Relaciones
        public ICollection<PlayerCompetitionStats> PlayerStats { get; set; } = new List<PlayerCompetitionStats>();
        public ICollection<TeamCompetitionStats> TeamStats { get; set; } = new List<TeamCompetitionStats>();
        public ICollection<CompetitionRound> Rounds { get; set; } = new List<CompetitionRound>();
        public ICollection<Titles> Titles { get; set; } = new List<Titles>();
    }
}
