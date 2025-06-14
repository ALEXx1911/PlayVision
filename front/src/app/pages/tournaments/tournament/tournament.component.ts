import { Component, signal } from '@angular/core';
import { BestPlayersStats } from "../best-players-stats/best-players-stats.component";
import { NuevoFieldComponent } from "../../../components/shared/nuevo-field/nuevo-field.component";
import { GeneralContainer } from "../../../components/shared/component-container/container.component";

@Component({
  selector: 'app-tournament',
  imports: [BestPlayersStats, NuevoFieldComponent, GeneralContainer],
  templateUrl: './tournament.component.html'
})
export default class TournamentComponent {
  readonly playerStatsTitle = signal("Best Players Stats");
  readonly historicalStatsTitle = signal("Historical Stats");
}
