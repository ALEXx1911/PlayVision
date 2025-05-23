import { Component, signal } from '@angular/core';
import { GeneralContainer } from "../../components/shared/component-container/container.component";
import { SpecificStats } from "../../components/shared/specific-stats/specific-stats.component";
import { PlayerStatsCareerColumns, PlayerStatsCurrentSeasonColumns } from '../utils/column-headers';

@Component({
  selector: 'app-player',
  imports: [GeneralContainer, SpecificStats],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export default class PlayerComponent {
  readonly tempActualColumns = PlayerStatsCurrentSeasonColumns;
  readonly data1 = signal([
    {
      tournament: "Liga",
      matchesplayed: 30,
      minutesplayed: 200,
      goals: 32,
      assists: 4,
      passes: 25,
      yellowcards: 2,
      redcards: 1,
      tackles: 5,
    },
  ]);
  readonly careerColumns = PlayerStatsCareerColumns;
  readonly data2 = signal([
    {
      club: "Real Madrid",
      season: "2022/2023",
      matchesplayed: 30,
      minutesplayed: 200,
      goals: 32,
      assists: 4,
      passes: 25,
      yellowcards: 2,
      redcards: 1,
      tackles: 5,
    }
  ]);
}
