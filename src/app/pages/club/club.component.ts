import { Component, signal } from '@angular/core';
import { Navbar } from "../../components/shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'club',
  imports: [Navbar,RouterOutlet],
  templateUrl: './club.component.html'
})
export default class ClubComponent {
  readonly navOptions = signal([
    {
      label:"Partidos",
      route:"partidosClub"
    },
    {
      label:"Plantilla",
      route:"plantilla"
    },
    {
      label:"Palmares",
      route:"palmares"
    },
    {
      label:"Competiciones",
      route:"competiciones"
    },
  ]);
}
