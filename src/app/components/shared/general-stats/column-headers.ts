import { ColumnDef } from "@tanstack/angular-table";
import { ClubLeaguePosition, MaxGoleadores } from "../../../models/stats-interdaces";

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
