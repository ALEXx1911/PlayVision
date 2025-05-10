import { Component } from "@angular/core";
import { MatchInfo } from "../matchinfo-panel/matchinfo-panel.component";

@Component({
    selector:"matches-panel",
    templateUrl:"./matches-panel.component.html",
    imports:[MatchInfo]
})
export class Matchespanel{
    //Ejemplo Estatico
    matches = [
        {
            id:1,
            teamA:"BAR",
            teamB:"NWC",
            score:"1-1",
            status:"FT",
            teamALogo:"escudo1.png",
            teamBLogo:"escudo2.png",
    },
    {
        id:2,
            teamA:"BAR",
            teamB:"NWC",
            score:"2-1",
            status:"FT",
            teamALogo:"escudo1.png",
            teamBLogo:"escudo2.png",
    },
    {
        id:3,
            teamA:"BAR",
            teamB:"NWC",
            score:"2-1",
            status:"FT",
            teamALogo:"escudo1.png",
            teamBLogo:"escudo2.png",
    },
    {
        id:4,
            teamA:"BAR",
            teamB:"NWC",
            score:"2-1",
            status:"FT",
            teamALogo:"escudo1.png",
            teamBLogo:"escudo2.png",
    },]
    //Aqui van todos los partidos que cambian dinamicamente

}