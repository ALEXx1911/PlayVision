using Microsoft.EntityFrameworkCore;
using PlayVisionAPI.Models;

namespace PlayVisionAPI.Data
{
    public class AppDbContext2 : DbContext
    {
        //Al pasar las opciones al constructor de la clase base, se configura el contexto de la BBDD
        public AppDbContext2(DbContextOptions<AppDbContext2> options) : base(options) { }
        //Definimos las tablas que hay en la BBDD como propiedades DbSet
        //Y ya podemos usarlas para hacer consultas a la BBDD usando LINQ con Entity Framework
        public DbSet<Team> Teams => Set<Team>();
        public DbSet<Match> Matches => Set<Match>();
        public DbSet<Player> Players => Set<Player>();
        public DbSet<Lineup> Lineups => Set<Lineup>();
        public DbSet<LineupSlot> LineupSlots => Set<LineupSlot>();
        public DbSet<Competition> Competitions => Set<Competition>();
        public DbSet<Titles> Titles => Set<Titles>();
        public DbSet<TeamSeasonStat> TeamSeasonStats => Set<TeamSeasonStat>();
        public DbSet<Season> Seasons => Set<Season>();
        public DbSet<PlayerCompetitionStats> PlayerCompetitionStats => Set<PlayerCompetitionStats>();
        public DbSet<TeamCompetitionStats> TeamCompetitionStats => Set<TeamCompetitionStats>();
        public DbSet<MatchEvent> MatchEvents => Set<MatchEvent>();
        public DbSet<MatchStat> MatchStats => Set<MatchStat>();
        public DbSet<PlayerMatchStats> PlayerMatchStats => Set<PlayerMatchStats>();
        public DbSet<MatchHeatmapPoint> MatchHeatmapPoints { get; set; }
        //En este metodo se configuran las distintas relaciones que hay entre las tablas de la BBDD
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Match>()
                .HasOne(m => m.HomeTeam)
                .WithMany(t => t.HomeMatches)
                .HasForeignKey(m => m.home_team_id)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Match>()
                .HasOne(m => m.AwayTeam)
                .WithMany(t => t.AwayMatches)
                .HasForeignKey(m => m.away_team_id)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Match>()
                .HasOne(m => m.Round)
                .WithMany(r => r.Matches)
                .HasForeignKey(m => m.RoundId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Match>()
                .HasOne(m => m.Round)
                .WithMany(r => r.Matches)
                .HasForeignKey(m => m.RoundId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Player>()
                .HasOne(p => p.Team)
                .WithMany(t => t.Players)
                .HasForeignKey(p => p.club_id)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Lineup>()
                .HasOne(l => l.Match)
                .WithMany(m => m.Lineups)
                .HasForeignKey(l => l.MatchId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Lineup>()
                .HasOne(l => l.Team)
                .WithMany(t => t.Lineups)
                .HasForeignKey(l => l.TeamId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<LineupSlot>()
                .HasOne(ls => ls.Lineup)
                .WithMany(l => l.Slots)
                .HasForeignKey(ls => ls.LineupId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<LineupSlot>()
                 .HasOne(ls => ls.Player)
                 .WithMany()
                 .HasForeignKey(ls => ls.PlayerId);

            modelBuilder.Entity<Titles>()
                .HasOne(t => t.Competition)
                .WithMany(c => c.Titles)
                .HasForeignKey(t => t.competition_id);

            modelBuilder.Entity<Titles>()
            .HasOne(t => t.Competition)
            .WithMany(c => c.Titles)
            .HasForeignKey(t => t.competition_id);


            modelBuilder.Entity<Titles>()
                .HasOne(t => t.Season)
                .WithMany(s => s.Titles)
                .HasForeignKey(h => h.season_id);

            modelBuilder.Entity<TeamSeasonStat>()
                .HasOne(stat => stat.Team)
                .WithMany(t => t.SeasonStats)
                .HasForeignKey(stat => stat.team_id);

            modelBuilder.Entity<TeamSeasonStat>()
                .HasOne(stat => stat.Season)
                .WithMany(s => s.TeamsSeasonStats)
                .HasForeignKey(stat => stat.season_id);

            modelBuilder.Entity<PlayerCompetitionStats>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.HasOne(x => x.Player)
                    .WithMany(p => p.CompetitionStats)
                    .HasForeignKey(x => x.player_id);

                entity.HasOne(x => x.Competition)
                .WithMany(c => c.PlayerStats)
                    .HasForeignKey(x => x.competition_id);

                entity.HasOne(x => x.Season)
                    .WithMany(s => s.Players)
                    .HasForeignKey(x => x.SeasonId);
            });

            modelBuilder.Entity<TeamCompetitionStats>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.HasOne(x => x.Team)
                    .WithMany(t => t.TeamCompetitionStats)
                    .HasForeignKey(x => x.TeamId).HasConstraintName("fk_team_stats_team");
            });

            modelBuilder.Entity<TeamCompetitionStats>()
                 .HasOne(ts => ts.Competition)
                 .WithMany(c => c.TeamStats)
                 .HasForeignKey(ts => ts.CompetitionId);

            modelBuilder.Entity<TeamCompetitionStats>()
                 .HasOne(ts => ts.Season)
                 .WithMany(s => s.TeamStats)
                 .HasForeignKey(ts => ts.SeasonId);

            modelBuilder.Entity<CompetitionRound>()
                .HasOne(r => r.Season)
                .WithMany(s => s.Rounds)
                .HasForeignKey(r => r.SeasonId);

            modelBuilder.Entity<MatchEvent>(ent =>
            {
                ent.HasOne(e => e.Match).WithMany(m => m.Events).HasForeignKey(e => e.MatchId);
                ent.HasOne(e => e.Player).WithMany().HasForeignKey(e => e.PlayerId).OnDelete(DeleteBehavior.Restrict);
                ent.HasOne(e => e.Assist).WithMany().HasForeignKey(e => e.AssistId).OnDelete(DeleteBehavior.Restrict);
                ent.HasOne(e => e.Substitution_in).WithMany().HasForeignKey(e => e.Substitution_in_id).OnDelete(DeleteBehavior.Restrict);
                ent.HasOne(e => e.Substitution_out).WithMany().HasForeignKey(e => e.Substitution_out_id).OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<MatchStat>(ent =>
            {
                ent.HasOne(ms => ms.Match).WithMany(m => m.Stats).HasForeignKey(ms => ms.MatchId);
                ent.HasOne(ms => ms.Team).WithMany().HasForeignKey(ms => ms.team_id);
            });
            modelBuilder.Entity<PlayerMatchStats>(ent =>
            {
                ent.HasOne(x => x.Match)
                   .WithMany(m => m.PlayerMatchStats)
                   .HasForeignKey(x => x.MatchId);
                ent.HasOne(x => x.Player)
                   .WithMany(p => p.MatchStats)
                   .HasForeignKey(x => x.PlayerId);
            });
            modelBuilder.Entity<MatchHeatmapPoint>(ent =>
            {
                ent.HasOne(h => h.Match)
                   .WithMany(m => m.HeatmapPoints)
                   .HasForeignKey(h => h.MatchId);
                ent.HasOne(h => h.Team)
                   .WithMany()
                   .HasForeignKey(h => h.TeamId);
            });
        }
    }
}
