namespace PlayVisionAPI.Models
{
    public class Team
    {
        
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Shortname { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public string Stadium { get; set; } = string.Empty;
        public string Coach { get; set; } = string.Empty;

        public ICollection<Match> HomeMatches { get; set; } = new List<Match>();
        public ICollection<Match> AwayMatches { get; set; } = new List<Match>();
        public ICollection<Player> Players { get; set; } = new List<Player>();
        //public ICollection<TeamCompetitionStats> CompetitionStats { get; set; } = new List<TeamCompetitionStats>();
        public ICollection<Lineup> Lineups { get; set; } = new List<Lineup>();
        public ICollection<Titles> Titles { get; set; } = new List<Titles>();
        
        public ICollection<TeamSeasonStat> SeasonStats { get; set; } = new List<TeamSeasonStat>();
        public ICollection<TeamCompetitionStats> TeamCompetitionStats { get; set; } = new List<TeamCompetitionStats>();
    }
}
