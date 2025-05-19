import { Component, input, signal } from "@angular/core";
import { ArrowUpCircle, LucideAngularModule } from "lucide-angular";
import { SpecificStats } from "../../../components/shared/specific-stats/specific-stats.component";
import { CentrocampistasColumns, GeneralStatsColumns, LeagueColumns, MaxGoleadoresColumns } from "../utils/column-headers";
import { GeneralContainer } from "../../../components/shared/component-container/container.component";

const ELEMENT_DATA2= [
    {position: 1,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
    {position: 2,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
    {position: 3,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
    {position: 4,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
    {position: 5,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
];
const ELEMENT_DATA= [
    {position: 1,name:"Rafa",minutesplayed:200,matchesplayed:30,total:32},
    {position: 2,name:"Rafa",minutesplayed:200,matchesplayed:30,total:32},
    {position: 3,name:"Rafa",minutesplayed:200,matchesplayed:30,total:32},
    {position: 4,name:"Rafa",minutesplayed:200,matchesplayed:30,total:32},
    {position: 5,name:"Rafa",minutesplayed:200,matchesplayed:30,total:32},
];
const ELEMENT_DATA3= [
    {position: 1,name:"Rafa",matchesplayed:30,mediapasesacertados:25,asistencias:4,media:32},
    {position: 2,name:"Rafa",matchesplayed:30,mediapasesacertados:25,asistencias:4,media:32},
    {position: 3,name:"Rafa",matchesplayed:30,mediapasesacertados:25,asistencias:4,media:32},
    {position: 4,name:"Rafa",matchesplayed:30,mediapasesacertados:25,asistencias:4,media:32},
    {position: 5,name:"Rafa",matchesplayed:30,mediapasesacertados:25,asistencias:4,media:32},
];
@Component({
    selector:"best-player-stats",
    imports: [LucideAngularModule, SpecificStats, GeneralContainer],
    templateUrl:"./best-players-stats.component.html"
})
export class BestPlayersStats{
    readonly playerStatsTitle = input<string>();
    readonly uparrow = ArrowUpCircle;
    readonly SpecificTitle1 = signal("Max Goleadores");
    readonly datos1= ELEMENT_DATA2;
    readonly columns1 = MaxGoleadoresColumns;

    readonly SpecificTitle2 = signal("Max Asistidores");
    readonly datos2= ELEMENT_DATA;
    readonly columns2 = GeneralStatsColumns;

    readonly SpecificTitle3 = signal("Tarjetas Amarillas");

    readonly SpecificTitle4 = signal("Tarjetas  Rojas");

    readonly SpecificTitle5 = signal("Top Centrocampistas");
    readonly datos3= ELEMENT_DATA3;
    readonly columns3= CentrocampistasColumns;

    readonly SpecificTitle6 = signal("Porterías a 0");
    

}