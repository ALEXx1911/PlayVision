import { CdkAccordion, CdkAccordionItem } from "@angular/cdk/accordion";
import { AfterViewInit, Component, computed, effect, input, signal, ViewChild } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { Icons } from "../../../pages/utils/icons";
import { sign } from "crypto";

@Component({
    selector: "container",
    standalone: true,
    imports:[LucideAngularModule,CdkAccordion,CdkAccordionItem],
    templateUrl: "./container.component.html",
})
export class GeneralContainer implements AfterViewInit {
    readonly title = input<string>();
    readonly isCollapsable = input<boolean>();
    readonly isCollapsed = input<boolean>();
    readonly centeredTitle = input<boolean>();
    readonly canSave = input<boolean>();
    readonly hasFlag = input<boolean>();
    uparrow = Icons.arrowUpCircle;
    downarrow = Icons.arrowDownCircle;
    bookmark = Icons.bookMark;

    @ViewChild(CdkAccordionItem) item!: CdkAccordionItem;

    readonly isViewReady = signal(false);
    
    ngAfterViewInit() {
        this.isViewReady.set(true);
    }
    readonly syncAccordion = effect(() => {
        if(!this.isViewReady() || !this.item) return;

        this.isCollapsed() ? this.item.close() : this.item.open();
    });
    
    readonly isOpen = computed(() => this.item?.expanded ?? false);

    save(){
        console.log("save");
    }
}