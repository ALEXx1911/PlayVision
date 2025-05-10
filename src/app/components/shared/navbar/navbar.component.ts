import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  options = [
    {
      label:"Partidos",
      route:"/home"
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
      label:"Torneos",
      route:"/ligues"
    },
    {
      label:"Jugadores",
      route:"/player"
    },
  ];
}
