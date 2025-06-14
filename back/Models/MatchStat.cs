namespace PlayVisionAPI.Models
{
    public class MatchStat
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; } = default!;
        public int team_id { get; set; }
        public Team Team { get; set; } = default!;
        public string TeamName { get; set; } = string.Empty;
        public int Goals { get; set; }
        public int Shots { get; set; }
        public int ShotsOnTarget { get; set; }
        public int Corners { get; set; }
        public decimal Possession { get; set; }
        public int Passes { get; set; }
        public int Fouls { get; set; }
        public int YellowCards { get; set; }
        public int RedCards { get; set; }
        public int Offsides { get; set; }

    }
}
