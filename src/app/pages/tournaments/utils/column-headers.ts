import { ColumnDef } from "@tanstack/angular-table";
import { ClubLeaguePosition, ClubPlantilla, GeneralStats, MaxGoleadores, TopCentrocampistas, TournamentWinners } from "../../../models/stats-interfaces";

export const LeagueColumns: ColumnDef<ClubLeaguePosition>[] = [
    {
      id:"position",
      accessorFn: (row) => row.position,
      cell: info => info.getValue(),
      header: () => "Pº",
    },
    {
      id:"name",
      accessorFn: (row) => row.name,
      cell: info => info.getValue(),
      header: () => "Club",
    },
    {
      id:"points",
      accessorFn: (row) => row.points,
      cell: info => info.getValue(),
      header: () => "PTs",
    },
    {
      id:"matchesplayed",
      accessorFn: (row) => row.matchesplayed,
      cell: info => info.getValue(),
      header: () => "PJ",
    },
    {
      id:"win",
      accessorFn: (row) => row.win,
      cell: info => info.getValue(),
      header: () => "W",
    },
    {
      id:"draft",
      accessorFn: (row) => row.draft,
      cell: info => info.getValue(),
      header: () => "E",
    },
    {
      id:"lose",
      accessorFn: (row) => row.lose,
      cell: info => info.getValue(),
      header: () => "P",
    },
    {
      id:"goalfavor",
      accessorFn: (row) => row.goalfavor,
      cell: info => info.getValue(),
      header: () => "GF",
    },{
      id:"goalagainst",
      accessorFn: (row) => row.goalagainst,
      cell: info => info.getValue(),
      header: () => "GA",
    },{
      id:"goaldifference",
      accessorFn: (row) => row.goaldifference,
      cell: info => info.getValue(),
      header: () => "GD",
    },{
      id:"lastmatches",
      accessorFn: (row) => row.lastmatches,
      cell: info => info.getValue(),
      header: () => "Ultimos Resultados",
    }
  ];
  export const MaxGoleadoresColumns : ColumnDef<MaxGoleadores>[] =[
    {
        id:"position",
        accessorFn: (row) => row.position,
        cell: info => info.getValue(),
        header: () => "Pº",
    },{
        id:"name",
        accessorFn: (row) => row.name,
        cell: info => info.getValue(),
        header: () => "Nombre",
    },
    {
      id:"matchesplayed",
      accessorFn: (row) => row.matchesplayed,
      cell: info => info.getValue(),
      header: () => "MP",
    },
    {
        id:"headGoal",
        accessorFn: (row) => row.headgoal,
        cell: info => info.getValue(),
        header: () => "HD",
    },{
        id:"penalty",
        accessorFn: (row) => row.penalty,
        cell: info => info.getValue(),
        header: () => "P",
    },{
        id:"throwAway",
        accessorFn: (row) => row.throwawaygoal,
        cell: info => info.getValue(),
        header: () => "TH",
    },{
        id:"total",
        accessorFn: (row) => row.position,
        cell: info => info.getValue(),
        header: () => "Total",
    }
  ];
  export const GeneralStatsColumns: ColumnDef<GeneralStats>[] = [
    {
      id:"position",
        accessorFn: (row) => row.position,
        cell: info => info.getValue(),
        header: () => "Pº",
    },
    {
      id:"name",
        accessorFn: (row) => row.name,
        cell: info => info.getValue(),
        header: () => "Nombre",
    },
    {
      id:"minutesplayed",
        accessorFn: (row) => row.minutesplayed,
        cell: info => info.getValue(),
        header: () => "MTsp",
    },
    {
      id:"matchesplayed",
        accessorFn: (row) => row.matchesplayed,
        cell: info => info.getValue(),
        header: () => "MP",
    },
    {
      id:"total",
        accessorFn: (row) => row.total,
        cell: info => info.getValue(),
        header: () => "Total",
    }
  ];
  export const CentrocampistasColumns: ColumnDef<TopCentrocampistas>[] = [
    {
      id:"position",
        accessorFn: (row) => row.position,
        cell: info => info.getValue(),
        header: () => "Pº",
    },
    {
      id:"name",
        accessorFn: (row) => row.name,
        cell: info => info.getValue(),
        header: () => "Nombre",
    },
    {
      id:"matchesplayed",
        accessorFn: (row) => row.matchesplayed,
        cell: info => info.getValue(),
        header: () => "MP",
    },
    {
      id:"mediapasesacertados",
        accessorFn: (row) => row.mediapasesacertados,
        cell: info => info.getValue(),
        header: () => "MPA",
    },
    {
      id:"asistencias",
        accessorFn: (row) => row.asistencias,
        cell: info => info.getValue(),
        header: () => "A",
    },
    {
      id:"media",
        accessorFn: (row) => row.media,
        cell: info => info.getValue(),
        header: () => "Media",
    }
  ];
  export const TournamentWinnersStatsColumns: ColumnDef<TournamentWinners>[] = [
    {
      id:"position",
        accessorFn: (row) => row.position,
        cell: info => info.getValue(),
        header: () => "Pº",
    },
    {
      id:"Club",
        accessorFn: (row) => row.club,
        cell: info => info.getValue(),
        header: () => "Club",
    },
    {
      id:"minutesplayed",
        accessorFn: (row) => row.totalplayed,
        cell: info => info.getValue(),
        header: () => "T.Jugados",
    },
    {
      id:"total",
        accessorFn: (row) => row.wins,
        cell: info => info.getValue(),
        header: () => "Total",
    }
  ];
  export const ClubPlantillaColumns: ColumnDef<ClubPlantilla>[] = [
    {
      id:"position",
        accessorFn: (row) => row.position,
        cell: info => info.getValue(),
        header: () => "Pº",
    },
    {
      id:"name",
        accessorFn: (row) => row.name,
        cell: info => info.getValue(),
        header: () => "Nombre",
    },
    {
      id:"age",
        accessorFn: (row) => row.age,
        cell: info => info.getValue(),
        header: () => "Age",
    },
    {
      id:"nationality",
        accessorFn: (row) => row.nationality,
        cell: info => info.getValue(),
        header: () => "Nacionalidad",
    },
    {
      id:"positionplayer",
        accessorFn: (row) => row.positionplayer,
        cell: info => info.getValue(),
        header: () => "POS",
    },
    {
      id:"matchesplayed",
        accessorFn: (row) => row.matchesplayed,
        cell: info => info.getValue(),
        header: () => "PJ",
    },
    {
      id:"minutesplayed",
        accessorFn: (row) => row.minutesplayed,
        cell: info => info.getValue(),
        header: () => "Min",
    },
    {
      id:"goals",
        accessorFn: (row) => row.goals,
        cell: info => info.getValue(),
        header: () => "G",
    },
    {
      id:"assists",
        accessorFn: (row) => row.assists,
        cell: info => info.getValue(),
        header: () => "A",
    },
    {
      id:"passes",
        accessorFn: (row) => row.passes,
        cell: info => info.getValue(),
        header: () => "PC",
    },
    {
      id:"yellowcards",
        accessorFn: (row) => row.yellowcards,
        cell: info => info.getValue(),
        header: () => "YC",
    },
    {
      id:"redcards",
        accessorFn: (row) => row.redcards,
        cell: info => info.getValue(),
        header: () => "RC",
    },
    {
      id:"tackles",
        accessorFn: (row) => row.tackles,
        cell: info => info.getValue(),
        header: () => "TK",
    },
  ];