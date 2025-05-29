import { Component, input } from "@angular/core";
import { GeneralContainer } from "../component-container/container.component";
import { SpecificStats } from "../specific-stats/specific-stats.component";
import { TrophyStatsColumns } from "../../../pages/utils/column-headers";

@Component({
    selector: "palmares",
    imports: [GeneralContainer, SpecificStats],
    templateUrl: "./palmares.component.html"
})
export class PalmaresComponent {
    readonly trophyColumns = TrophyStatsColumns;
    readonly tableTitle = input<string>("");
    readonly palmares = input<any[]>([]);
}
