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
export interface GeneralStats{
    position: number;
    name: string;
    matchesplayed: number;
    minutesplayed: number;
    total: number;
}
export interface TopCentrocampistas{
    position: number;
    name: string;
    matchesplayed: number;
    mediapasesacertados: number;
    asistencias: number;
    media:number;
}
export interface TournamentWinners{
    position: number;
    club: string;
    totalplayed: number;
    wins: number;
}
export interface ClubPlantilla{
    position: number;
    name: string;
    nationality: string;
    age: number;
    positionplayer: string;
    matchesplayed: number;
    goals: number;
    assists: number;
    yellowcards: number;
    redcards: number;
    minutesplayed: number;
    tackles: number;
    passes: number;
}
export interface PlayerData{
    id: number;
    name: string;
    surname: string;
    age: number;
    height: number;
    nationality: string;
    shirtnumber: number;
    position: string;
    dominantfoot: string;
}
export interface PlayerStatsCurrentSeason{
    tournament: string;
    matchesplayed: number;
    minutesplayed: number;
    goals: number;
    assists: number;
    passes: number;
    yellowcards: number;
    redcards: number;
    tackles: number;
}
export interface PlayerStatsCareer{
    club: string;
    season: string;
    matchesplayed: number;
    minutesplayed: number;
    goals: number;
    assists: number;
    passes: number;
    yellowcards: number;
    redcards: number;
}
export interface TrophyStatsColumns{
    tournamentName: string;
    total: number;
}
