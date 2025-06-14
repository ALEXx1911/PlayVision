import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
@Component({
    selector:"matchesinfo-panel",
    imports: [RouterLink],
    templateUrl:"./matchinfo-panel.component.html"
})
export class MatchInfo{
    //Aqui van todos los partidos que cambian dinamicamente
    readonly partido = input.required<{
        id: number;
        teamA: string;
        teamB: string;
        score: string;
        status: string;
        teamALogo: string;
        teamBLogo: string;
      }>();

}