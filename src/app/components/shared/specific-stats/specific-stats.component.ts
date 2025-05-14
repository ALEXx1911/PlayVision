import { Component, computed, input, InputSignal, signal } from "@angular/core";
import { ColumnDef, createAngularTable, FlexRenderDirective, getCoreRowModel } from "@tanstack/angular-table";
import { MaxGoleadoresColumns } from "../../../pages/tournaments/utils/column-headers";
import { MatTableModule } from "@angular/material/table";



@Component({
    selector:"specific-stats",
    imports:[MatTableModule,FlexRenderDirective],
    templateUrl:"./specific-stats.component.html"
})
export class SpecificStats{
    readonly title = input.required<string>();
    public data = input.required<any[]>();
    public defaultColumns=input.required<any[]>();

    public table = computed( () => {
        if (this.data() || this.defaultColumns()) {
            return createAngularTable( () => ({
              data: this.data(),
              getCoreRowModel: getCoreRowModel(),
              columns: this.intoArray(this.defaultColumns)
            }));
        }else
            return null;
    });
    

    public intoArray(signal : InputSignal<any[]>){
        const res:ColumnDef<any>[]= signal().map(data => data); 
        return res;
    }
}