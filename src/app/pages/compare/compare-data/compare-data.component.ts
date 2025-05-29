import { Component, signal } from "@angular/core";
import { Icons } from "../../utils/icons";
import { LucideAngularModule, Trophy } from "lucide-angular";
import { TrophyStatsColumns } from "../../utils/column-headers";
import { PalmaresComponent } from "../../../components/shared/palmares/palmares.component";

@Component({
  selector: "compare-data",
  imports: [LucideAngularModule, PalmaresComponent],
  templateUrl: "./compare-data.component.html",
})
export class CompareDataComponent {
    readonly iconPlayer = Icons.profile;
    readonly iconChart = Icons.chart;
    readonly iconTrophy = Icons.trophy;
    readonly trophyColumns = TrophyStatsColumns;
    readonly palmares = signal([
    {
        tournamentName: "Liga",
        total: 10,
    },
    {
        tournamentName: "Champions",
        total: 4,
    },
    {
        tournamentName: "Mundial",
        total: 1,
    },
    {
        tournamentName: "Copa America",
        total: 1,
    },
]);

    readonly playerDataFields = [
        { field: "Nombre", value: "Lionel Messi" },
        { field: "Edad", value: "36" },
        { field: "Altura", value: "1.70 m" },
        { field: "Dorsal", value: "10" },
        { field: "Posición", value: "DEL" },
        { field: "Nacionalidad", value: "spain.png" },
        { field: "Club", value: "escudo1.png" },
        
    ];


}