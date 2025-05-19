import { Component, input } from "@angular/core";
import { RouterLink} from "@angular/router";
import { ArrowDownCircleIcon, ChartNetwork, LucideAngularModule } from "lucide-angular";

@Component({
    selector:"matchinfo-large",
    imports:[LucideAngularModule,RouterLink],
    templateUrl:"./matchinfo-large.component.html",
})
export default class MatchInfoLarge{
    readonly chartIcon= ChartNetwork;
    readonly downArrow= ArrowDownCircleIcon;
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
}