import { Component, input } from "@angular/core";
import { Icons } from "../../../pages/utils/icons";
import { LucideAngularModule } from "lucide-angular";
import { CdkAccordion, CdkAccordionItem } from "@angular/cdk/accordion";
import { GeneralContainer } from "../component-container/container.component";
import { PlayerIconComponent } from "./playerIconComponent/playerIcon.component";

@Component({
    selector: "bestXI",
    imports: [LucideAngularModule, GeneralContainer, PlayerIconComponent],
    templateUrl: "./bestXI.component.html",
    styleUrl: './bestXI.component.css'

})
export class BestXI{
    uparrow = Icons.arrowUpCircle;
    downarrow = Icons.arrowDownCircle;
    readonly titleContainer = input<string>("");
    readonly isCollapsed = input<boolean>(false);
    readonly isClubXI = input<boolean>(false);
    readonly formationType = input<string>("5-3-2");
    readonly formationCode = this.getFormationCode();

    readonly formationPlayers= [
        { id: 1, name: "Pedri", media: 8.5},
        { id: 2, name: "Gavi", media: 8.0},
        { id: 3, name: "Fati", media: 7.5},
        { id: 4, name: "Lewandowski", media: 9.0},
        { id: 5, name: "Kounde", media: 7.8},
        { id: 6, name: "Araujo", media: 7.9},
        { id: 7, name: "Alba", media: 7.6},
        { id: 8, name: "Busquets", media: 8.2},
        { id: 9, name: "Frenkie de Jong", media: 8.3},
        { id: 10, name: "Ter Stegen", media: 8.1},
        { id: 11, name: "Christensen", media: 7.7},
    ];

    getFormationCode(): string {
        switch (this.formationType()) {
            case "4-3-3":
                return "alineacion1";
            case "4-4-2":
                return "alineacion2";
            case "4-2-3-1":
                return "alineacion3";
            case "3-5-2":
                return "alineacion4";
            case "5-3-2":
                return "alineacion5";
            default:
                return "alineacion1";
        }
    };
}