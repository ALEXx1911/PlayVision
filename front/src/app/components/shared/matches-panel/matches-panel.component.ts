import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID, signal } from "@angular/core";
import { MatchInfo } from "../matchinfo-panel/matchinfo-panel.component";
import {register, SwiperContainer} from "swiper/element-bundle";
import { SwiperOptions } from "swiper/types";
import { isPlatformBrowser } from "@angular/common";
register();
@Component({
    selector:"matches-panel",
    templateUrl:"./matches-panel.component.html",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports:[MatchInfo]
})
export class Matchespanel implements OnInit{
    swiperElement = signal<SwiperContainer | null>(null);
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            const swiperElementContructor = document.querySelector("swiper-container");
            const swiperOptions :SwiperOptions = {
                spaceBetween: 10,
                navigation: {
                    enabled: true,
                    nextEl: ".swiper-button-next",
                },
                slidesPerView: 4,
                breakpoints: {
                    0: {
                        slidesPerView: 4,
                    },
                    640: {
                        slidesPerView: 6,
                    },
                    800:{
                        slidesPerView: 8,
                    },
                    1000: {
                        slidesPerView: 10,
                    },
                }
            }
            Object.assign(swiperElementContructor!, swiperOptions);
            this.swiperElement.set(swiperElementContructor as SwiperContainer);
            this.swiperElement()?.initialize();
        }
    }
    //Ejemplo Estatico
    matches = [
        {
            id:1,
            teamA:"BAR",
            teamB:"NWC",
            score:"1-1",
            status:"FT",
            teamALogo:"escudo1.png",
            teamBLogo:"escudo2.png",
    },
    {
        id:2,
            teamA:"BAR",
            teamB:"NWC",
            score:"2-1",
            status:"FT",
            teamALogo:"escudo1.png",
            teamBLogo:"escudo2.png",
    },
    {
        id:3,
            teamA:"BAR",
            teamB:"NWC",
            score:"2-1",
            status:"FT",
            teamALogo:"escudo1.png",
            teamBLogo:"escudo2.png",
    },
    {
        id:4,
            teamA:"BAR",
            teamB:"NWC",
            score:"2-1",
            status:"FT",
            teamALogo:"escudo1.png",
            teamBLogo:"escudo2.png",
    },]
    //Aqui van todos los partidos que cambian dinamicamente

}