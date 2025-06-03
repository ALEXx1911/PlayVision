import { Component, signal } from '@angular/core';
import { LeagueTable } from "../league-table/league-table.component";
import { BestPlayersStats } from "../../best-players-stats/best-players-stats.component";
import { BestClubsStats } from '../../best-teams-stats/best-clubs-stats.component';
import { BestXI } from "../../../../components/shared/lineupXI/bestXI.component";

@Component({
  selector: 'app-league',
  imports: [LeagueTable, BestPlayersStats, BestClubsStats, BestXI],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css'
})
export default class LeagueComponent {
  readonly title1 = signal("Jugadores más Relevantes");
  readonly title2 = signal("Equipos más Relevantes");

}
