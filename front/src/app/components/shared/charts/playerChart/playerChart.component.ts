import { isPlatformBrowser } from "@angular/common";
import { Component, inject, input, PLATFORM_ID, signal } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
@Component({
  selector: "player-chart",
  imports: [NgxChartsModule],
  templateUrl: "./playerChart.component.html",
  standalone : true,
})
export class PlayerChartComponent {
    
    //Necesario para saber si estamos en el navegador y pintar el grafico
    isBrowserRendered = isPlatformBrowser(inject(PLATFORM_ID));
    
    //readonly viewSize= input<[number,number]>([1500,400]);
    readonly chartData = input<any[]>([]); //Los datos para el grafico
    private viewSize= signal<[number,number]>([1500,400]);
    readonly viewSizeCh = this.viewSize.asReadonly();

    readonly showXAxis: boolean = false;
    readonly showYAxis: boolean = true;
    readonly showLegend: boolean = false;
    readonly showDataLabels: boolean = true;
    readonly roundEdges: boolean = true;
    readonly showGridLines: boolean = false;
    readonly xScaleMax: number = 100;
    
    //Usamos el breakpoint de Angular para saber el tamaño de la pantalla
    private bpObserver = inject(BreakpointObserver);

    //Usamos el observer para cambiar el tamaño del gráfico si la pantalla es pequeña o no
    constructor(){
      this.bpObserver.observe(['(max-width: 950px)']).subscribe(result => {
        if (result.matches) {
          this.viewSize.set([300, 400]);
        }else{
          this.viewSize.set([1500, 400]);
        }
      })
    }
    
}