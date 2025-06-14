namespace PlayVisionAPI.Models
{
    public class CompetitionRound
    {
        public int Id { get; set; }
        public int CompetitionId { get; set; }
        public Competition Competition { get; set; } = default!;
        public int SeasonId { get; set; }
        public Season Season { get; set; } = default!;
        public string Name { get; set; } = string.Empty;
        public short SortOrder { get; set; }

        public ICollection<Match> Matches { get; set; } = new List<Match>();
    }
}
