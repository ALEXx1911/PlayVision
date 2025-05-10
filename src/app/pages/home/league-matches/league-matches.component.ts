import { Component } from "@angular/core";
import { ArrowUpCircle, Bookmark, LucideAngularModule } from "lucide-angular";
import MatchInfoLarge from "../matchinfo-large/matchinfo-large.component";

@Component({
    selector:"league-matches",
    imports:[LucideAngularModule,MatchInfoLarge],
    templateUrl:"./league-matches.component.html"
})
export class LeagueMatches{
    readonly bookmarck = Bookmark;
    readonly uparrow = ArrowUpCircle;
    displayedColumns: string[] = ['position', 'name', 'points', 'matchesplayed',"win",
    "draft","lose","goalfavor","goalagainst",
    "goaldifference","lastmatches"];

    matches = [
        {
            id:1,
            status:"started",
            score:"0-0",
            homeTeam:"Barcelona",
            homeTeamLogo:"escudo1.png",
            awayTeam:"Newcastle",
            awayTeamLogo:"escudo2.png",
            stadium:"Camp Nou",
            time:"10'",
            goals:[""],
            cards:[""],
        }
    ];
}