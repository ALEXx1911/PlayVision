import { Component, signal } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { ArrowUpCircle, Bookmark, LucideAngularModule } from "lucide-angular";
import { ColumnDef, createAngularTable, FlexRenderDirective, getCoreRowModel} from "@tanstack/angular-table";
import { NgClass } from "@angular/common";

export interface ClubLeaguePosition {
    name: string;
    position: number;
    points: number;
    matchesplayed: number;
    win:number;
    draft:number;
    lose:number;
    goalfavor:number;
    goalagainst:number;
    goaldifference:string;
    lastmatches:string;
  }

  const ELEMENT_DATA: ClubLeaguePosition[] = [
    {position: 1, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 2, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 3, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 4, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 5, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 6, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 7, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 8, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 9, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 10, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 11, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 12, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 13, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 14, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 15, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 16, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 17, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 18, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 19, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
    {position: 20, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"}
  ];

  export const defaultColumns: ColumnDef<ClubLeaguePosition>[] = [
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

@Component({
    selector:"league-table",
    imports:[NgClass,LucideAngularModule,MatTableModule,FlexRenderDirective],
    templateUrl:"./league-table.component.html"
})
export class LeagueTable{
    readonly bookmarck = Bookmark;
    readonly uparrow = ArrowUpCircle;
    public data = signal<ClubLeaguePosition[]>(ELEMENT_DATA);

    public table = createAngularTable( () => ({
      data: this.data(),
      getCoreRowModel: getCoreRowModel(),
      columns: defaultColumns
    }));
}