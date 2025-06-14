import { Component, input, signal } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { SpecificStats } from "../../../components/shared/specific-stats/specific-stats.component";
import {  GeneralStatsColumns,  MaxGoleadoresColumns } from "../../utils/column-headers";
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { Icons } from "../../utils/icons";
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
    selector:"best-clubs-stats",
    imports: [LucideAngularModule, SpecificStats, CdkAccordionModule, GeneralContainer],
    templateUrl:"./best-clubs-stats.component.html"
})
export class BestClubsStats{
    readonly clubStatsTitle = input<string>();
    readonly uparrow = Icons.arrowUpCircle;
    readonly SpecificTitle1 = signal("Mejor Visitante");
    readonly datos1= ELEMENT_DATA2;
    readonly columns1 = MaxGoleadoresColumns;

    readonly SpecificTitle2 = signal("Mejor Local");
    readonly datos2= ELEMENT_DATA;
    readonly columns2 = GeneralStatsColumns;

    readonly SpecificTitle3 = signal("Max Ganadores");

    readonly SpecificTitle4 = signal("Tarjetas");

    

}