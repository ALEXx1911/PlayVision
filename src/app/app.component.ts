import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/shared/footer/footer.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { Matchespanel } from "./components/shared/matches-panel/matches-panel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent,Matchespanel, HeaderComponent, Matchespanel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlayVision';
}
