import { Component, input } from "@angular/core";

@Component({
    selector: "field-match-stats",
    imports: [],
    templateUrl: "./fieldMatchStats.component.html",
})
export class FieldMatchStatsComponent {
    readonly fieldName = input<string>("");
    readonly isHomeSelected = input<boolean>(false);
    readonly homeStats = input<number | string>(0);
    readonly awayStats = input<number | string>(0);
}