export interface ClubLeaguePosition {
    name: string;
    position: number;
    points: number;
    matchesplayed: number;
    win:number;
    draft:number;
    lose:number;
    goalfavor:number;
    goalagainst:number;
    goaldifference:string;
    lastmatches:string;
  }
export interface MaxGoleadores {
    position: number;
    name:string
    matchesplayed: number;
    headgoal: number;
    penalty: number;
    throwawaygoal: number;
    total: number;
}