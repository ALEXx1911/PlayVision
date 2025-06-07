import { Component, signal } from "@angular/core";
import { Icons } from "../../utils/icons";
import { LucideAngularModule} from "lucide-angular";
import { TrophyStatsColumns } from "../../utils/column-headers";
import { PalmaresComponent } from "../../../components/shared/palmares/palmares.component";
import { HorizontalCompareChartComponent } from "../../../components/shared/charts/compareChart/horizontalCompareChart.component";

@Component({
  selector: "compare-data",
  imports: [LucideAngularModule, PalmaresComponent, HorizontalCompareChartComponent],
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

    readonly player1Stats = [
        {
            name: "PJ",
            series: [
                {name: "Jugador1", value: 50},
                {name: "Jugador2", value: 45},
            ]
        },
        {
            name: "Min",
            series: [
                {name: "Jugador1", value: 40},
                {name: "Jugador2", value: 38},
            ]
        },
        {
            name: "Goles",
            series: [
                {name: "Jugador1", value: 40},
                {name: "Jugador2", value: 30},
            ]
        },
        {
            name: "Asis",
            series: [
                {name: "Jugador1", value: 20},
                {name: "Jugador2", value: 15},
            ]
        },
        {
            name: "%Pases",
            series: [
                {name: "Jugador1", value: 85},
                {name: "Jugador2", value: 80},
            ]
        },
        {
            name: "Tackles",
            series: [
                {name: "Jugador1", value: 10},
                {name: "Jugador2", value: 8},
            ]
        },
        {
            name: "TA",
            series: [
                {name: "Jugador1", value: 5},
                {name: "Jugador2", value: 3},
            ]
        },
        {
            name: "TR",
            series: [
                {name: "Jugador1", value: 1},
                {name: "Jugador2", value: 0},
            ]
        }
    ];


}