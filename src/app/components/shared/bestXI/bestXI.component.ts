import { Component } from "@angular/core";
import { Icons } from "../../../pages/tournaments/utils/icons";
import { LucideAngularModule } from "lucide-angular";
import { CdkAccordion, CdkAccordionItem } from "@angular/cdk/accordion";
import { GeneralContainer } from "../component-container/container.component";

@Component({
    selector: "bestXI",
    imports: [LucideAngularModule, GeneralContainer],
    templateUrl: "./bestXI.component.html",
    styleUrl: './bestXI.component.css'

})
export class BestXI{
    uparrow = Icons.arrowUpCircle;
    downarrow = Icons.arrowDownCircle;
}