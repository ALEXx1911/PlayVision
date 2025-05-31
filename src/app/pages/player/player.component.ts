import { Component, signal } from '@angular/core';
import { GeneralContainer } from "../../components/shared/component-container/container.component";
import { SpecificStats } from "../../components/shared/specific-stats/specific-stats.component";
import { PlayerStatsCareerColumns, PlayerStatsCurrentSeasonColumns} from '../utils/column-headers';
import { PlayerChartComponent } from "../../components/shared/charts/playerChart/playerChart.component";
import { PalmaresComponent } from "../../components/shared/palmares/palmares.component";

@Component({
  selector: 'app-player',
  imports: [GeneralContainer, SpecificStats, PlayerChartComponent, PalmaresComponent],
  templateUrl: './player.component.html'
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
  readonly playerStats = [
        { name: "PJ", value: 50 },
        { name: "Min", value: 40 },
        { name: "Goles", value: 20 },
        { name: "Asistencias", value: 10 },
        { name: "%Pases", value: 30 },
        { name: "Tackles", value: 15 },
        { name: "TA", value: 5 },
        { name: "TR", value: 2 },
    ];
    readonly palmares = signal([
        {
            tournamentName: "Liga",
            total: 10,
        },
        {
            tournamentName: "Champions",
            total: 4,
        },
        {
            tournamentName: "Mundial",
            total: 1,
        },
      ]);
}
