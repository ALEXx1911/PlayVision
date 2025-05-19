import { CdkAccordion, CdkAccordionItem } from "@angular/cdk/accordion";
import { Component, input } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { Icons } from "../../../pages/tournaments/utils/icons";

@Component({
    selector: "container",
    imports:[LucideAngularModule,CdkAccordion,CdkAccordionItem],
    templateUrl: "./container.component.html",
})
export class GeneralContainer{
    readonly title = input<string>();
    readonly isCollapsable = input<boolean>();
    readonly isCollapsed = input<boolean>();
    readonly centeredTitle = input<boolean>();
    readonly canSave = input<boolean>();
    readonly hasFlag = input<boolean>();
    uparrow = Icons.arrowUpCircle;
    downarrow = Icons.arrowDownCircle;
    bookmark = Icons.bookMark;

    save(){
        console.log("save");
    }
}