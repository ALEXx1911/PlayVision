import { Component, signal } from '@angular/core';
import { LeagueTable } from "./league-table/league-table.component";

@Component({
  selector: 'app-ligues',
  imports: [LeagueTable],
  templateUrl: './ligues.component.html',
  styleUrl: './ligues.component.css'
})
export default class LiguesComponent {
  currentTemp = signal(new Date().toLocaleDateString());
}
