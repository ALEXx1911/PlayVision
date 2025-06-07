export interface TeamLineup{
    lineUpCode: string;
    players: PlayerSlot[];
}
export interface PlayerSlot{
    id: number;
    name: string;
}