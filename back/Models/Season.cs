namespace PlayVisionAPI.Models
{
    public class Season
    {
        public int id { get; set; }
        public int competition_id { get; set; }
        public int year { get; set; }
        public DateOnly start_date { get; set; }
        public DateOnly end_date { get; set; }

        public ICollection<TeamSeasonStat> TeamsSeasonStats { get; set; } = new List<TeamSeasonStat>();
        public ICollection<PlayerCompetitionStats> Players { get; set; } = new List<PlayerCompetitionStats>();
        public ICollection<Titles> Titles { get; set; } = new List<Titles>();
        public ICollection<CompetitionRound> Rounds { get; set; } = new List<CompetitionRound>();
        public ICollection<TeamCompetitionStats> TeamStats { get; set; } = new List<TeamCompetitionStats>();

    }
}
