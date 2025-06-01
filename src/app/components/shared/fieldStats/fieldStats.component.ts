import { Component, input, signal } from "@angular/core";
import { GeneralContainer } from "../component-container/container.component";
import { PlayerIconComponent } from "../alineationXI/playerIconComponent/playerIcon.component";
import { getFormationCode } from "../../../pages/utils/utilidades";

@Component({
    selector: "field-stats",
    imports: [ PlayerIconComponent],
    templateUrl: "./fieldStats.component.html",
    styleUrls: ["../alineationXI/bestXI.component.css", "./fieldStats.component.css"],
})
export class FieldStatsComponent {
    readonly homeLineUpCode = input<string>("");
    readonly awayLineUpCode = input<string>("");
    readonly homeFormationPlayers = input<any[]>([]);
    readonly awayFormationPlayers = input<any[]>([]);
    readonly isHomeTeamSelected = signal<boolean>(true);

    readonly homeFormationCodeType = getFormationCode(this.homeLineUpCode());
    readonly awayFormationCodeType = getFormationCode(this.awayLineUpCode());
    
    changeTeamSelected(value:boolean){
        this.isHomeTeamSelected.set(value);
    };
    
}