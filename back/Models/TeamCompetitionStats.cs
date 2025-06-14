using System.ComponentModel.DataAnnotations.Schema;

namespace PlayVisionAPI.Models
{
    public class TeamCompetitionStats
    {
        public int Id { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; } = default!;

        public int CompetitionId { get; set; }
        public Competition Competition { get; set; } = default!;

        public int SeasonId { get; set; }
        public Season Season { get; set; } = default!;

        public int MatchesPlayed { get; set; }
        public int GoalsFor { get; set; }
        public int GoalsAgainst { get; set; }
        public int Win { get; set; }
        public int Draw { get; set; }
        public int Lose { get; set; }
        public int Points { get; set; }
        public int YellowCards { get; set; }
        public int RedCards { get; set; }

        public int HomeMatchesPlayed { get; set; }
        public int HomeWin { get; set; }
        public int HomeDraw { get; set; }
        public int HomeLose { get; set; }
        public int HomeGoalsFor { get; set; }
        public int HomeGoalsAgainst { get; set; }
        public int HomePoints { get; set; }

        public int AwayMatchesPlayed { get; set; }
        public int AwayWin { get; set; }
        public int AwayDraw { get; set; }
        public int AwayLose { get; set; }
        public int AwayGoalsFor { get; set; }
        public int AwayGoalsAgainst { get; set; }
        public int AwayPoints { get; set; }
    }
}
