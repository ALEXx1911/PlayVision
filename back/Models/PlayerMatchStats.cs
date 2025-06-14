namespace PlayVisionAPI.Models
{
    public class PlayerMatchStats
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; } = default!;

        public int PlayerId { get; set; }
        public Player Player { get; set; } = default!;

        public int Shots { get; set; }
        public int ShotsOnTarget { get; set; }
        public int Fouls { get; set; }
        public int Dribbles { get; set; }
        public int Corners { get; set; }
        public int Passes { get; set; }
        public int PassesCorrect { get; set; }
        public int Media { get; set; }
    }
}
