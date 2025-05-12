import { Component, input } from "@angular/core";
import { ArrowUpCircle, LucideAngularModule } from "lucide-angular";
import { SpecificStats } from "../specific-stats/specific-stats.component";



@Component({
    selector:"general-stats",
    imports: [LucideAngularModule, SpecificStats],
    templateUrl:"./general-stats.component.html"
})
export class GeneralStats{
    readonly title = input("");
    readonly uparrow = ArrowUpCircle;

}