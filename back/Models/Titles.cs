namespace PlayVisionAPI.Models
{
    public class Titles
    {
        public int id { get; set; }
        public int team_id { get; set; }
        public Team Team { get; set; } = default!;
        public int competition_id { get; set; }
        public Competition Competition { get; set; } = default!;
        public int season_id { get; set; }
        public Season Season { get; set; } = default!;
    }
}
