import { Component } from '@angular/core';
import { GeneralContainer } from "../../components/shared/component-container/container.component";
import { LeagueColumns } from '../utils/column-headers';
import { SpecificStats } from "../../components/shared/specific-stats/specific-stats.component";
import { BestXI } from "../../components/shared/bestXI/bestXI.component";
import { LeagueMatches } from "../home/league-matches/league-matches.component";

@Component({
  selector: 'app-match',
  imports: [GeneralContainer, SpecificStats, BestXI, LeagueMatches],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export default class MatchComponent {
  readonly isMatchOngoing: boolean = false;
  readonly leagueColumns = LeagueColumns;
  readonly matchData = [
    {position: 1, name: 'FC Barcelona', points: 80, matchesplayed:30,win:25,draft:2,lose:4,goalfavor:102,goalagainst:30,goaldifference:"+70",lastmatches:"VLVVE"},
  ];  
}
