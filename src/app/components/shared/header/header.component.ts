import { Component } from '@angular/core';
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
}
