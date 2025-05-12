import { Component } from '@angular/core';
import { LeagueTable } from "../league-table/league-table.component";
import { GeneralStats } from "../../../components/shared/general-stats/general-stats.component";

@Component({
  selector: 'app-league',
  imports: [LeagueTable, GeneralStats],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css'
})
export default class LeagueComponent {

}
