import { Component } from "@angular/core";
import { ArrowUpCircle, Bookmark, LucideAngularModule } from "lucide-angular";
import MatchInfoLarge from "../matchinfo-large/matchinfo-large.component";
import { GeneralContainer } from "../../../components/shared/component-container/container.component";

@Component({
    selector:"league-matches",
    imports: [LucideAngularModule, MatchInfoLarge, GeneralContainer],
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
        },
        {
            id:2,
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
        },
        {
            id:3,
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