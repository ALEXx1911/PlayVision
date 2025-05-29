import { Component, signal } from "@angular/core";
import { GeneralContainer } from "../../../components/shared/component-container/container.component";
import { SpecificStats } from "../../../components/shared/specific-stats/specific-stats.component";
import { ClubPlantillaColumns } from "../../utils/column-headers";
import { BestPlayersStats } from "../../tournaments/best-players-stats/best-players-stats.component";
import { BestXI } from "../../../components/shared/bestXI/bestXI.component";

@Component({
  selector: "club-plantilla",
  imports: [GeneralContainer, SpecificStats, BestXI],
  templateUrl: "./club-plantilla.component.html",
})
export default class ClubPlantillaComponent {
  readonly temporada = signal(new Date().getFullYear());
  readonly columns = ClubPlantillaColumns;
  readonly plantilla = signal([
    {
      position: 1,
      name: "Rafa",
      dorsal: 1,
      nacionalidad: "Española",
      edad: 30,
      positionplayer: "Portero",
      matchesplayed: 30,
      minutesplayed: 200,
      goals: 32,
      assists: 4,
      passes: 25,
      yellowcards: 2,
      redcards: 1,
      tackles: 5,
}]);
}