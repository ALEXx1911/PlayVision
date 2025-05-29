import { Component, signal } from "@angular/core";
import { PalmaresComponent } from "../../../components/shared/palmares/palmares.component";

@Component({
  selector: "club-palmares",
  imports: [PalmaresComponent],
  templateUrl: "./club-palmares.component.html",
})
export default class ClubPalmaresComponent {
  readonly teamPalmares = signal<any[]>([
        {
            tournamentName: "Liga",
            total: 28,
            image: "liga.png",
        },
        {
            tournamentName: "Champions League",
            image: "champions.png",
            total: 5,
        },
        {
            tournamentName: "Copa del Rey",
            image: "copa_rey.png",
            total: 32,
        },
    ]);
}