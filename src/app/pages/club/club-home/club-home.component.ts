import { Component } from "@angular/core";
import { LeagueMatches } from "../../home/league-matches/league-matches.component";

@Component({
  selector: "club-home",
  imports: [LeagueMatches],
  templateUrl: "./club-home.component.html",
})
export default class ClubHomeComponent {
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