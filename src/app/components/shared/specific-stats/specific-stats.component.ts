import { Component, computed, input, signal } from "@angular/core";
import { ColumnDef, createAngularTable, FlexRenderDirective, getCoreRowModel } from "@tanstack/angular-table";
import { MaxGoleadoresColumns } from "../general-stats/column-headers";
import { MatTableModule } from "@angular/material/table";

const ELEMENT_DATA2= [
    {position: 1,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
    {position: 2,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
    {position: 3,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
    {position: 4,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
    {position: 5,name:"Rafa",matchesplayed:30,headgoal:25,penalty:3,throwawaygoal:4,total:32},
];

@Component({
    selector:"specific-stats",
    imports:[MatTableModule,FlexRenderDirective],
    templateUrl:"./specific-stats.component.html"
})
export class SpecificStats{
    readonly title = input("");
    public data = signal(ELEMENT_DATA2);

    public table = createAngularTable( () => ({
      data: this.data(),
      getCoreRowModel: getCoreRowModel(),
      columns: MaxGoleadoresColumns
    }));
}