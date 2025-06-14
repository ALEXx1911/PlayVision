import { Component, inject, input } from "@angular/core";
import { SearchBarService } from "../service/search-bar.service";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { OverlayModule } from "@angular/cdk/overlay";
import { SearchOverlayComponent } from "../overlay-component/search-overlay.component";

@Component({
  selector: "searchbar",
  imports: [MatIcon, MatIconButton, OverlayModule, SearchOverlayComponent],
  templateUrl: "./searchbar.component.html",
  providers: [SearchBarService],
})
export class SearchBarComponent {
    
    private readonly searchBarService= inject(SearchBarService);
    overlayOpen = this.searchBarService.overlayOpen;
    searchTerm = this.searchBarService.searchTerm;
    readonly searchType = input<boolean>();
    
    search(searchTerm: string){
      if (!searchTerm) return;
      this.searchBarService.search(searchTerm);

    }

    clearSearch(){
      this.searchBarService.clearSearch();
    }

    
}