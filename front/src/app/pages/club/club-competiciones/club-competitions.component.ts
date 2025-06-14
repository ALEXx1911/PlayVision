import { Component,  signal } from "@angular/core";
import { LeagueMatches } from "../../home/league-matches/league-matches.component";

@Component({
    selector: "club-competitions",
    imports: [LeagueMatches],
    templateUrl: "./club-competitions.component.html",
})
export default class ClubCompetitionsComponent {
    readonly matches = [
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
    readonly tournamentClubMatches= signal<any[]>(this.matches);
    
}