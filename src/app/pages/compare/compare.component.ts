import { Component, inject, signal } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { SearchBarComponent } from "./searchbar/searchbar.component";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GeneralContainer } from "../../components/shared/component-container/container.component";
import { CompareDataComponent } from "./compare-data/compare-data.component";
@Component({
  selector: 'app-compare',
  imports: [OverlayModule, SearchBarComponent, MatFormFieldModule, MatInputModule, FormsModule, MatSelectModule, GeneralContainer, CompareDataComponent],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})
export default class CompareComponent {

    readonly showComparePlayer= signal<boolean>(true);
    readonly temporada = signal<string[]>(["2022","2023","2024"]);
    
    changeCompareView(value:boolean){
      this.showComparePlayer.set(value);
      console.log("Canbiooooo");
    }
}
