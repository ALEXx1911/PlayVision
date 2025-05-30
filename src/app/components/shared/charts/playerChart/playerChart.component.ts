import { isPlatformBrowser } from "@angular/common";
import { Component, inject, input, PLATFORM_ID } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@Component({
  selector: "player-chart",
  imports: [NgxChartsModule],
  templateUrl: "./playerChart.component.html",
  standalone : true,
})
export class PlayerChartComponent {
    
    isBrowserRendered = isPlatformBrowser(inject(PLATFORM_ID));
    
    readonly viewSize= input<[number,number]>([500,400]);
    readonly chartData = input<any[]>([]);

    readonly showXAxis: boolean = false;
    readonly showYAxis: boolean = true;
    readonly showLegend: boolean = false;
    readonly showDataLabels: boolean = true;
    readonly roundEdges: boolean = true;
    readonly showGridLines: boolean = false;
    readonly xScaleMax: number = 100;
    
    
}