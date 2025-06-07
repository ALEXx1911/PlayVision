import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, input, OnInit, PLATFORM_ID, signal, ViewChild } from "@angular/core";
import * as d3 from "d3";
import { pitch , actions } from "d3-soccer";
import {register, SwiperContainer} from "swiper/element-bundle";
import { SwiperOptions } from "swiper/types";
import { isPlatformBrowser } from "@angular/common";
import { TeamLineup } from "../../../models/interfaces";
import { PlayerIconComponent } from "../lineupXI/playerIconComponent/playerIcon.component";
import { FieldMatchStatsComponent } from "../fieldStats/fieldMatchStats/fieldMatchStats.component";

register();

@Component({
    selector: "nuevo-field",
    imports: [PlayerIconComponent, FieldMatchStatsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: "./nuevo-field.component.html",
})
export class NuevoFieldComponent implements AfterViewInit, OnInit {
    @ViewChild("chartContainer", { static: true })
    private chartContainer!: ElementRef<HTMLDivElement>;
    swiperElement = signal<SwiperContainer | null>(null);

    readonly currentPitchType = signal("lineups");
    readonly homeTeamLineup = input<TeamLineup>();
    readonly isMatchXI = input<boolean>(true);
    readonly isClubXI = input<boolean>(true);
    readonly viewMode = signal<string>("lineups");
    readonly isHomeTeamSelected = signal<boolean>(true);

    protected fieldMatchStats =[
        {field:"Ratings", homeStats: 6.9, awayStats: 7.2},
        {field:"Shots", homeStats: 12, awayStats: 10},
        {field:"S Target", homeStats: 5, awayStats: 4},
        {field:"Possession%", homeStats: 55, awayStats: 45},
        {field:"Passes", homeStats: 400, awayStats: 350},
        {field:"Fouls", homeStats: 10, awayStats: 12},
        {field:"Corners", homeStats: 4, awayStats: 3},
        {field:"Offsides", homeStats: 2, awayStats: 1},
    ];

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            const swiperElementContructor = document.querySelector("swiper-container");
            const swiperOptions: SwiperOptions = {
                spaceBetween: 10,
                navigation: {
                    enabled: true,
                    nextEl: ".swiper-button-next",
                },
                slidesPerView: "auto",
            };
            Object.assign(swiperElementContructor!, swiperOptions);
            this.swiperElement.set(swiperElementContructor as SwiperContainer);
            this.swiperElement()?.initialize();
        }
    }

    constructor(@Inject(PLATFORM_ID) private platformId: object) {}
    ngAfterViewInit() {
        this.renderPitch();
    }

    changeTeamSelected(value:boolean){
        this.isHomeTeamSelected.set(value);
        this.renderPitch();
    };
    changeViewMode(newView: string){
        this.viewMode.set(newView);
        this.renderPitch();
    }

    private renderPitch(){
        const container = this.chartContainer.nativeElement;
        d3.select(container).selectAll("*").remove();
        const pitchHeight = 600;
        
        const pitchGenerator = pitch().height(pitchHeight).showDirOfPlay(false);
        const width = pitchGenerator.width();

        const svg = d3.select(container).append("svg")
        .attr("width","100%")
        .attr("viewBox", `0 0 ${width} ${pitchHeight}`)
        .style("display", "block")
        .attr("preserveAspectRatio", "xMinYMin meet");
        
            svg.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", width)
            .attr("height", pitchHeight)
            .attr("fill", "#73c565");

        svg.call(pitchGenerator);

        //Cambiamos el tipo de campo según la vista seleccionada
        switch(this.viewMode()){
            case "lineups":
                this.drawLineupMobile(svg, width, pitchHeight);
                break;
            case "heatmap":
                this.drawHeatmap(svg,pitchGenerator, width, pitchHeight);
                break;
            case "shotmap":
                this.drawShotMap(svg, pitchGenerator, width, pitchHeight);
                break;
            case "goalmap":
                this.drawGoalMap(svg,pitchGenerator);
                break;
            default:
                this.drawLineupMobile(svg, width, pitchHeight);
                break;
        }
        
    }

    protected alineacion1: TeamLineup={
      lineUpCode: "5-3-2",
      players  :[
        { id: 1, name: "Portero"},
        { id: 2, name: "Defensa Central"},
        { id: 3, name: "Defensa Central" },
        { id: 4, name: "Lateral Izquierdo"},
        { id: 5, name: "Lateral Derecho"},
        { id: 6, name: "Centrocampista Defensivo"},
        { id: 7, name: "Centrocampista Ofensivo"},
        { id: 8, name: "Centrocampista Ofensivo"},
        { id: 9, name: "Delantero Izquierdo"},
        { id: 10, name: "Delantero Derecho"},
        { id: 11, name: "Delantero Centro"}
    ]  
    };

    private drawLineupMobile(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,parentWidth: number, parentHeight: number) {
        const lineupContainer = svg.append("g")
            .attr("class", "lineup-container");

        const lineupCoordinates = this.createTeamLineupPositions(this.homeTeamLineup() || this.alineacion1);
        
        lineupContainer.selectAll("circle")
            .data(lineupCoordinates)
            .enter()
            .append("circle")
            .attr("cx", d => this.isHomeTeamSelected() ? d.xPos * parentWidth : (1 - d.xPos) * parentWidth)
            .attr("cy", d => d.yPos * parentHeight)
            .attr("r", parentHeight * 0.055)
            .attr("fill", "#ffffff");
        
        lineupContainer.selectAll("text")
            .data(lineupCoordinates)
            .enter()
            .append("text")
            .attr("x", d => this.isHomeTeamSelected() ? d.xPos * parentWidth : (1 - d.xPos) * parentWidth)
            .attr("y", d => d.yPos * parentHeight + (parentHeight * 0.05)+20)
            .attr("text-anchor", "middle")
            .attr("font-weight", "bold")
            .attr("font-size","20px")
            .attr("fill", "#000000")
            .text(d => d.name);
        
    }

    private drawHeatmap(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,pitchGenerator:any, parentWidth: number, parentHeight: number) {
        const data: Cell[] = PITCH_DATA;

        const xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, parentWidth]);
        const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([parentHeight, 0]);

        const xBins = d3.range(0, 100+5, 5);
        const yBins = d3.range(0, 100+5, 5);
        const heat: {
            x0: number, x1: number,
            y0: number, y1: number,
            count: number
        }[] = [];
        xBins.slice(0, -1).forEach((x0, i) => {
    yBins.slice(0, -1).forEach((y0, j) => {
      const x1 = xBins[i + 1], y1 = yBins[j + 1];
      const count = data.filter(d =>
        d.x >= x0 && d.x < x1 &&
        d.y >= y0 && d.y < y1
      ).length;
      heat.push({ x0, x1, y0, y1, count });
    });
  });
         const maxCount = d3.max(heat, d => d.count) || 1;
  const colorScale = d3.scaleSequential<number>()
    .interpolator(d3.interpolateYlOrRd)
    .domain([0, maxCount]);
  
svg.selectAll<SVGRectElement, typeof heat[0]>('rect.heat')
    .data(heat)
    .enter()
    .append('rect')
      .attr('class', 'heat')
      .attr('x', d => xScale(d.x0))
      .attr('y', d => yScale(d.y1))
      .attr('width', d => xScale(d.x1) - xScale(d.x0))
      .attr('height', d => yScale(d.y0) - yScale(d.y1))
      .attr('fill', d => d.count > 0 ? colorScale(d.count) : 'transparent')
      .attr('opacity', 0.7);
        
    }

    drawShotMap(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, pitchGenerator:any, parentWidth: number, parentHeight: number) {
       
        const shotData = [
            { x: 30, y: 50, result: "goal" },
            { x: 70, y: 50, result: "missed" },
            { x: 50, y: 30, result: "saved" },
        ];

        const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, parentWidth]);
        const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([parentHeight, 0]);
        
        const shotColors : Record<Shot["result"], string> = {
            goal: "#00FF00",
            missed: "#FF0000",
            saved: "#0000FF" 
        };
        
        svg.selectAll<SVGCircleElement, Shot>('circle.shot')
            .data(shotData)
            .enter()
            .append('circle')
            .attr('class', 'shot')
            .attr('cx', d => xScale(d.x))
            .attr('cy', d => yScale(d.y))
            .attr('r', 20)
            .attr('fill', d => this.paintShotColor(d.result))
            .attr('stroke', '#333')
            .attr('stroke-width', 1)
            .attr('opacity', 0.8)

        
    }

    drawGoalMap(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, pitchGenerator:any) {
        const actionLayer = actions()
        .pitch(pitchGenerator)
        .data(ACTIONS)
        .fieldX((d: Action) => d.x)
        .fieldY((d: Action) => d.y)
        .symbol((d: Action) => {
            return d.type === "goal" 
            ? d3.symbol().type(d3.symbolStar).size(100)()
            : d3.symbol().type(d3.symbolCircle).size(64)();
        })
        .connectors(true)
        .connectorFilter((d: Action) => d.type === "pass")
        .connectorLength(20)
        .connectorWidth(6)
        .connectorColor((d: Action) => d.type === "goal" ? "#00FF00" : "#0000FF")
        .style("fill", (d: Action) => d.type === "goal" ? "#00FF00" : "#0000FF")
        .style("stroke", "#333")
        .style("stroke-width", 1.5)
        .arrowLength(6)
        .edgeColor("#333")
        .edgeWidth(1.5)
        .filter((d:Action) => d.type === "pass")

        svg.call(actionLayer);
    }
        paintShotColor(result : string){
            switch(result){
                case "goal":
                    return "#00FF00";
                case "missed":
                    return "#FF0000";
                case "saved":
                    return "#0000FF";
                default:
                    return "#000000"; 
            }
        }
    
    private createTeamLineupPositions(teamLineup: TeamLineup){

        const lineupCode = teamLineup.lineUpCode.replaceAll("-", "");
        let resLineup:any;
        
        const alineacion433 = [
        { id: 1, name: "Portero", xPos: 0.08, yPos: 0.5 },
        { id: 2, name: "Defensa Central", xPos: 0.25, yPos: 0.35 },
        { id: 3, name: "Defensa Central", xPos: 0.25, yPos: 0.65 },
        { id: 4, name: "Lateral Izquierdo", xPos: 0.25, yPos: 0.10 },
        { id: 5, name: "Lateral Derecho", xPos: 0.25, yPos: 0.90 },
        { id: 6, name: "Centrocampista Defensivo", xPos: 0.45, yPos: 0.50 },
        { id: 7, name: "Centrocampista Ofensivo", xPos: 0.60, yPos: 0.35 },
        { id: 8, name: "Centrocampista Ofensivo", xPos: 0.60, yPos: 0.65 },
        { id: 9, name: "Delantero Izquierdo", xPos: 0.75, yPos: 0.10 },
        { id: 10, name: "Delantero Derecho", xPos: 0.75, yPos: 0.90 },
        { id: 11, name: "Delantero Centro", xPos: 0.85, yPos: 0.50 }
        ];

        const alineacion442 = [
        { id: 1, name: "Portero", xPos: 0.08, yPos: 0.5 },
        { id: 2, name: "Defensa Central", xPos: 0.25, yPos: 0.35 },
        { id: 3, name: "Defensa Central", xPos: 0.25, yPos: 0.65 },
        { id: 4, name: "Lateral Izquierdo", xPos: 0.25, yPos: 0.10 },
        { id: 5, name: "Lateral Derecho", xPos: 0.25, yPos: 0.90 },
        { id: 6, name: "Centrocampista", xPos: 0.45, yPos: 0.10 },
        { id: 7, name: "Centrocampista ", xPos: 0.45, yPos: 0.35 },
        { id: 8, name: "Centrocampista ", xPos: 0.45, yPos: 0.65 },
        { id: 9, name: "Centrocampista", xPos: 0.45, yPos: 0.90 },
        { id: 10, name: "Delantero Centro", xPos: 0.70, yPos: 0.70 },
        { id: 11, name: "Delantero Centro", xPos: 0.70, yPos: 0.30 }
        ];
        const alineacion4231 = [
        { id: 1, name: "Portero", xPos: 0.08, yPos: 0.5 },
        { id: 2, name: "Defensa Central", xPos: 0.25, yPos: 0.35 },
        { id: 3, name: "Defensa Central", xPos: 0.25, yPos: 0.65 },
        { id: 4, name: "Lateral Izquierdo", xPos: 0.25, yPos: 0.10 },
        { id: 5, name: "Lateral Derecho", xPos: 0.25, yPos: 0.90 },
        { id: 6, name: "Centrocampista Defensivo", xPos: 0.45, yPos: 0.65 },
        { id: 7, name: "Centrocampista Defensivo", xPos: 0.45, yPos: 0.35 },
        { id: 8, name: "Centrocampista Ofensivo", xPos: 0.65, yPos: 0.50 },
        { id: 9, name: "Delantero Izquierdo", xPos: 0.65, yPos: 0.10 },
        { id: 10, name: "Delantero Derecho", xPos: 0.65, yPos: 0.90 },
        { id: 11, name: "Delantero Centro", xPos: 0.80, yPos: 0.50 }
        ];
        const alineacion352 = [
        { id: 1, name: "Portero", xPos: 0.08, yPos: 0.5 },
        { id: 2, name: "Defensa Central", xPos: 0.25, yPos: 0.30 },
        { id: 3, name: "Defensa Central", xPos: 0.25, yPos: 0.50 },
        { id: 4, name: "Defensa Central", xPos: 0.25, yPos: 0.70 },
        { id: 5, name: "Centro Derecho", xPos: 0.55, yPos: 0.90 },
        { id: 6, name: "Centrocampista Defensivo", xPos: 0.40, yPos: 0.50 },
        { id: 7, name: "Centrocampista Ofensivo", xPos: 0.45, yPos: 0.30 },
        { id: 8, name: "Centrocampista Ofensivo", xPos: 0.45, yPos: 0.70 },
        { id: 9, name: "Centro Izquierdo", xPos: 0.55, yPos: 0.10 },
        { id: 10, name: "Delantero Derecho", xPos: 0.75, yPos: 0.70 },
        { id: 11, name: "Delantero Centro", xPos: 0.75, yPos: 0.30 }
        ];
        const alineacion532 = [
        { id: 1, name: "Portero", xPos: 0.08, yPos: 0.5 },
        { id: 2, name: "Defensa Central", xPos: 0.25, yPos: 0.30 },
        { id: 3, name: "Defensa Central", xPos: 0.25, yPos: 0.50 },
        { id: 4, name: "Defensa Central", xPos: 0.25, yPos: 0.70 },
        { id: 5, name: "Lateral Derecho", xPos: 0.35, yPos: 0.90 },
        { id: 6, name: "Lateral Izquierdo", xPos: 0.35, yPos: 0.10 },
        { id: 7, name: "Centrocampista Defensivo", xPos: 0.45, yPos: 0.50 },
        { id: 8, name: "Centrocampista Ofensivo", xPos: 0.60, yPos: 0.65 },
        { id: 9, name: "Centrocampista Ofensivo", xPos: 0.60, yPos: 0.35 },
        { id: 10, name: "Delantero Centro", xPos: 0.80, yPos: 0.70 },
        { id: 11, name: "Delantero Centro", xPos: 0.80, yPos: 0.30 }
        ];
        //Se devuelve la alineación según el código de la formación
        switch (lineupCode) {
            case "433":
                return resLineup = alineacion433;
            case "442":
                return resLineup = alineacion442;
            case "4231":
                return resLineup = alineacion4231;
            case "352":
                return resLineup = alineacion352;
            case "532":
                return resLineup = alineacion532;
            default:
                return resLineup = alineacion433;
        }
    }
}
export interface Cell {
  x: number;
  y: number;
  value: number;
}
export const PITCH_DATA: Cell[] = Array.from({ length: 200 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  value: Math.random() * 1
}));
export interface Shot {
    x:number;
    y:number;
    result: "goal" | "missed" | "saved";
}
export interface Action {
    type : "goal" | "pass";
    x: number; // 0-100 (% del campo)
    y: number; // 0-100 (% del campo)
    from: string;
    to?: string;
    minute: number;
    team: "home" | "away";
}
export const ACTIONS: Action[] = [
    { type: "pass", x: 30, y: 40, from: "A. Gómez", to: "B. Ruiz", minute: 78, team: "home" },
    { type: "pass", x: 35, y: 45, from: "B. Ruiz", to: "C. Pérez", minute: 78, team: "home" },
    { type: "pass", x: 40, y: 50, from: "C. Pérez", to: "D. López", minute: 79, team: "home" },
    { type: "pass", x: 45, y: 55, from: "D. López", to: "E. Navarro", minute: 79, team: "home" },
    { type: "pass", x: 50, y: 60, from: "E. Navarro", to: "F. Sánchez", minute: 80, team: "home" },
    { type: "goal", x: 55, y: 65, from: "F. Sánchez", minute: 80, team: "home" }
];