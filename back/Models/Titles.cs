namespace PlayVisionAPI.Models
{
    public class Titles
    {
        public int Id { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; } = default!;
        public int CompetitionId { get; set; }
        public Competition Competition { get; set; } = default!;
        public int SeasonId { get; set; }
        public Season Season { get; set; } = default!;
    }
}
