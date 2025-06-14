namespace PlayVisionAPI.Models
{
    public class Match
    {
        public int id { get; set; }
        public int season_id { get; set; }
        public DateTime match_date { get; set; }
        public int home_team_id { get; set; }
        public int away_team_id { get; set; }
        public int home_goals { get; set; }
        public int away_goals { get; set; }
        public string? stadium { get; set; } = string.Empty;
        public TimeOnly start_time { get; set; } = new TimeOnly(0, 0, 0);
        public string status { get; set; } = string.Empty;
        public int? RoundId { get; set; } 
        public CompetitionRound? Round { get; set; } = default!;
        public string? description { get; set; } = string.Empty;
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
