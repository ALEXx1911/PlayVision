import { BreakpointObserver } from "@angular/cdk/layout";
import { isPlatformBrowser } from "@angular/common";
import { Component, inject, input, PLATFORM_ID, signal } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@Component({
  selector: "horizontalCompare-chart",
  imports: [NgxChartsModule],
  templateUrl: "./horizontalCompareChart.component.html",
  standalone : true,
})
export class HorizontalCompareChartComponent {
    
    isBrowserRendered = isPlatformBrowser(inject(PLATFORM_ID));
    
    private viewSize= signal<[number,number]>([900,400]);
    readonly viewSizeCh = this.viewSize.asReadonly();
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

     //Usamos el breakpoint de Angular para saber el tamaño de la pantalla
    private bpObserver = inject(BreakpointObserver);

    //Usamos el observer para cambiar el tamaño del gráfico si la pantalla es pequeña o no
    constructor(){
      this.bpObserver.observe(['(max-width: 950px)']).subscribe(result => {
        if (result.matches) {
          this.viewSize.set([300, 400]);
        }else{
          this.viewSize.set([900, 400]);
        }
      })
    }
    
}