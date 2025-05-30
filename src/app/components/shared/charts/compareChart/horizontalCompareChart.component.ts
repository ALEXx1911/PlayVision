import { isPlatformBrowser } from "@angular/common";
import { Component, inject, input, PLATFORM_ID } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@Component({
  selector: "horizontalCompare-chart",
  imports: [NgxChartsModule],
  templateUrl: "./horizontalCompareChart.component.html",
  standalone : true,
})
export class HorizontalCompareChartComponent {
    
    isBrowserRendered = isPlatformBrowser(inject(PLATFORM_ID));
    
    readonly viewSize= input<[number,number]>([420,400]);
    readonly chartData = input<any[]>([]);

    readonly showXAxis: boolean = false;
    readonly showYAxis: boolean = true;
    readonly showLegend: boolean = false;
    readonly showDataLabels: boolean = true;
    readonly roundEdges: boolean = true;
    readonly showGridLines: boolean = false;
    readonly xScaleMax: number = 100;
    readonly customColors: any = {
        color: "#5AA454",
    };
    
}