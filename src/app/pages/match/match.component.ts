import { Component, input} from '@angular/core';
import { GeneralContainer } from "../../components/shared/component-container/container.component";
import { LeagueColumns } from '../utils/column-headers';
import { SpecificStats } from "../../components/shared/specific-stats/specific-stats.component";
import { BestXI } from "../../components/shared/alineationXI/bestXI.component";
import { LeagueMatches } from "../home/league-matches/league-matches.component";
import { FieldStatsComponent } from "../../components/shared/fieldStats/fieldStats.component";

@Component({
  selector: 'app-match',
  imports: [GeneralContainer, SpecificStats, BestXI, LeagueMatches, FieldStatsComponent],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export default class MatchComponent {
  readonly isMatchOngoing = input<boolean>(true);
  readonly leagueColumns = LeagueColumns;
  readonly matchData = [
    {position: 1, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
  ];
  readonly homeLineUpCode = input<string>("4-3-3");
  readonly awayLineUpCode = input<string>("4-3-3");
  readonly homeFormationPlayers= [
        { id: 1, name: "Pedri", media: 8.5},
        { id: 2, name: "Gavi", media: 8.0},
        { id: 3, name: "Fati", media: 7.5},
        { id: 4, name: "Lewandowski", media: 9.0},
        { id: 5, name: "Kounde", media: 7.8},
        { id: 6, name: "Araujo", media: 7.9},
        { id: 7, name: "Alba", media: 7.6},
        { id: 8, name: "Busquets", media: 8.2},
        { id: 9, name: "Frenkie de Jong", media: 8.3},
        { id: 10, name: "Ter Stegen", media: 8.1},
        { id: 11, name: "Christensen", media: 7.7},
  ];
  readonly awayFormationPlayers= [
        { id: 1, name: "Pedri", media: 8.5},
        { id: 2, name: "Gavi", media: 8.0},
        { id: 3, name: "Fati", media: 7.5},
        { id: 4, name: "Lewandowski", media: 9.0},
        { id: 5, name: "Kounde", media: 7.8},
        { id: 6, name: "Araujo", media: 7.9},
        { id: 7, name: "Alba", media: 7.6},
        { id: 8, name: "Busquets", media: 8.2},
        { id: 9, name: "Frenkie de Jong", media: 8.3},
        { id: 10, name: "Ter Stegen", media: 8.1},
        { id: 11, name: "Christensen", media: 7.7},
  ];
}
