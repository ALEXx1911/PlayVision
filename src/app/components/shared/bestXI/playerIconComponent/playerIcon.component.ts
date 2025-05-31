import { Component, input } from "@angular/core";

@Component({
    selector: "player-icon",
    imports: [],
    templateUrl: "./playerIcon.component.html"
})
export class PlayerIconComponent {
    readonly playerPosition = input<string>("");
    readonly playerName = input<string>("");
    readonly playerMedia = input<number>(0);
}