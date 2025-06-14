namespace PlayVisionAPI.Models
{
    public class MatchHeatmapPoint
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; } = default!;
        public int TeamId { get; set; }
        public Team Team { get; set; } = default!;
        public double XCoord { get; set; }
        public double YCoord { get; set; }

        public int Intensity { get; set; }
    }
}
