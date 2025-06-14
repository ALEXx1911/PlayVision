namespace PlayVisionAPI.Models
{
    public class Season
    {
        public int Id { get; set; }
        public int CompetitionId { get; set; }
        public int Year { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }

        public ICollection<TeamSeasonStat> TeamsSeasonStats { get; set; } = new List<TeamSeasonStat>();
        public ICollection<PlayerCompetitionStats> Players { get; set; } = new List<PlayerCompetitionStats>();
        public ICollection<Titles> Titles { get; set; } = new List<Titles>();
        public ICollection<CompetitionRound> Rounds { get; set; } = new List<CompetitionRound>();
        public ICollection<TeamCompetitionStats> TeamStats { get; set; } = new List<TeamCompetitionStats>();

    }
}
