namespace PlayVisionAPI.Models
{
    public class Match
    {
        public int Id { get; set; }
        public int SeasonId { get; set; }
        public DateTime MatchDate { get; set; }
        public int HomeTeamId { get; set; }
        public int AwayTeamId { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
        public string? Stadium { get; set; } = string.Empty;
        public TimeOnly StartTime { get; set; } = new TimeOnly(0, 0, 0);
        public string Status { get; set; } = string.Empty;
        public int? RoundId { get; set; } 
        public CompetitionRound? Round { get; set; } = default!;
        public string? Description { get; set; } = string.Empty;
        public CompetitionRound? CompetitionRound { get; set; } = default!;

        public ICollection<MatchEvent> Events { get; set; } = new List<MatchEvent>();
        public ICollection<MatchStat> Stats { get; set; } = new List<MatchStat>();
        public ICollection<PlayerMatchStats>? PlayerMatchStats { get; set; } = new List<PlayerMatchStats>();
        public ICollection<MatchHeatmapPoint>? HeatmapPoints { get; set; } = new List<MatchHeatmapPoint>();
        public ICollection<Lineup> Lineups { get; set; } = new List<Lineup>();

        // Propiedades de navegación para las relaciones
        public Team HomeTeam { get; set; } = default!;
        public Team AwayTeam { get; set; } = default!;
        public Season? Season { get; set; }
    }
}
