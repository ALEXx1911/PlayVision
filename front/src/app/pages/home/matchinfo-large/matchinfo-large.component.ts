import { CdkAccordion, CdkAccordionItem } from "@angular/cdk/accordion";
import { Component, computed, effect, input, signal, ViewChild } from "@angular/core";
import { RouterLink} from "@angular/router";
import { ArrowDownCircleIcon, ChartNetwork, LucideAngularModule } from "lucide-angular";

@Component({
    selector:"matchinfo-large",
    imports:[LucideAngularModule,RouterLink,CdkAccordionItem,CdkAccordion],
    templateUrl:"./matchinfo-large.component.html",
})
export default class MatchInfoLarge{
    readonly chartIcon= ChartNetwork;
    readonly downArrow= ArrowDownCircleIcon;
    isCollapsed = signal(true);
    readonly matchInfo= input.required<{
        status:string,
        score:string,
        homeTeam:string,
        homeTeamLogo:string,
        awayTeam:string,
        awayTeamLogo:string,
        stadium:string,
        time:string,
        goals:string[],
        cards:string[],
    }>();
    //Buscamos la primera instancia del CdkAccordion
    @ViewChild(CdkAccordionItem) item!: CdkAccordionItem;
    readonly isViewReady =signal(false);

    //Tras montar el componente, decimos que la vista esta lista
    ngAfterViewInit() {
        this.isViewReady.set(true);
    }

    //Usamos un efecto para sincronizar tanto el estado del acordeon como el valor de la señal
    readonly syncAccordion  = effect(() =>{
        if (!this.isViewReady() || !this.item) return;
        this.isCollapsed() ? this.item.close() : this.item.open();
    });
    //Usamos una señal computada para obtener el estado del acordeon que depende de si el acordeon esta abierto
    readonly isOpen = computed(() => this.item?.expanded ?? false);

}