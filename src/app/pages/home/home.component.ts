import { Component, signal } from '@angular/core';
import { LeagueMatches } from "./league-matches/league-matches.component";
import { BestXI } from "../../components/shared/bestXI/bestXI.component";

@Component({
  selector: 'app-home',
  imports: [LeagueMatches, BestXI],
  templateUrl: './home.component.html'
})
export default class HomeComponent {
    todayDate = signal(new Date().toLocaleDateString());
}
