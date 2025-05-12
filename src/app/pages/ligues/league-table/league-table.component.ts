import { Component, signal } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { ArrowUpCircle, Bookmark, LucideAngularModule } from "lucide-angular";
import { ColumnDef, createAngularTable, FlexRenderDirective, getCoreRowModel} from "@tanstack/angular-table";
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ClubLeaguePosition } from "../../../models/stats-interdaces";
import { LeagueColumns } from "../../../components/shared/general-stats/column-headers";

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

@Component({
    selector:"league-table",
    imports:[NgClass,LucideAngularModule,MatTableModule,FlexRenderDirective,RouterLink],
    templateUrl:"./league-table.component.html"
})
export class LeagueTable{
    readonly bookmarck = Bookmark;
    readonly uparrow = ArrowUpCircle;
    readonly id = 1;
    public data = signal<ClubLeaguePosition[]>(ELEMENT_DATA);

    public table = createAngularTable( () => ({
      data: this.data(),
      getCoreRowModel: getCoreRowModel(),
      columns: LeagueColumns
    }));
}