import { Component, input, signal } from "@angular/core";
import { GeneralContainer } from "../component-container/container.component";
import { PlayerIconComponent } from "../lineupXI/playerIconComponent/playerIcon.component";
import { getFormationCode } from "../../../pages/utils/utilidades";
import { FieldMatchStatsComponent } from "./fieldMatchStats/fieldMatchStats.component";

@Component({
    selector: "field-stats",
    imports: [PlayerIconComponent, FieldMatchStatsComponent],
    templateUrl: "./fieldStats.component.html",
    styleUrls: ["../lineupXI/bestXI.component.css", "./fieldStats.component.css"],
})
export class FieldStatsComponent {
    readonly homeLineUpCode = input<string>("");
    readonly awayLineUpCode = input<string>("");
    readonly homeFormationPlayers = input<any[]>([]);
    readonly awayFormationPlayers = input<any[]>([]);
    readonly isHomeTeamSelected = signal<boolean>(true);
    readonly fieldMatchStats = input<any[]>([
        {field:"Ratings", homeStats: 6.9, awayStats: 7.2},
        {field:"Shots", homeStats: 12, awayStats: 10},
        {field:"S Target", homeStats: 5, awayStats: 4},
        {field:"Possession%", homeStats: 55, awayStats: 45},
        {field:"Passes", homeStats: 400, awayStats: 350},
        {field:"Fouls", homeStats: 10, awayStats: 12},
        {field:"Corners", homeStats: 4, awayStats: 3},
        {field:"Offsides", homeStats: 2, awayStats: 1},
    ]);

    readonly homeFormationCodeType = getFormationCode(this.homeLineUpCode());
    readonly awayFormationCodeType = getFormationCode(this.awayLineUpCode());
    
    changeTeamSelected(value:boolean){
        this.isHomeTeamSelected.set(value);
    };
    
}