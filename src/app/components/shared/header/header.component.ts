import { Component, input, signal } from '@angular/core';
import {AlignJustifyIcon, LucideAngularModule, UserRound} from "lucide-angular";
import { Navbar } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, Navbar,RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly justifyIcon = AlignJustifyIcon;
  readonly userIcon= UserRound;
  readonly navOptions = signal([
    {
      label:"Partidos",
      route:"/home"
    },
    {
      label:"Torneos",
      route:"/ligues"
    },
    {
      label:"Equipos",
      route:"/club"
    },
    {
      label:"Comparar",
      route:"/compare"
    },
    {
      label:"Jugadores",
      route:"/player"
    },
  ]);
}
