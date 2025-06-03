import { Component, signal } from '@angular/core';
import { BestPlayersStats } from "../best-players-stats/best-players-stats.component";
import { BestXI } from "../../../components/shared/lineupXI/bestXI.component";

@Component({
  selector: 'app-tournament',
  imports: [BestPlayersStats, BestXI],
  templateUrl: './tournament.component.html'
})
export default class TournamentComponent {
  readonly playerStatsTitle = signal("Best Players Stats");
  readonly historicalStatsTitle = signal("Historical Stats");
}
