import { Component, signal } from '@angular/core';
import { Navbar } from "../../components/shared/navbar/navbar.component";
import { LeagueMatches } from "./league-matches/league-matches.component";

@Component({
  selector: 'app-home',
  imports: [LeagueMatches],
  templateUrl: './home.component.html'
})
export default class HomeComponent {
    todayDate = signal(new Date().toLocaleDateString());
}
