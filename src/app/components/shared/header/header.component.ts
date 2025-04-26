import { Component } from '@angular/core';
import {AlignJustifyIcon, LucideAngularModule, UserRound} from "lucide-angular";

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly justifyIcon = AlignJustifyIcon;
  readonly userIcon= UserRound;
}
