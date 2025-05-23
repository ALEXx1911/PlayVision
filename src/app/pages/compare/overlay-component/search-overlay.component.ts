import { Component, computed, inject } from "@angular/core";
import { MatDivider } from "@angular/material/divider";
import {MatListModule} from '@angular/material/list';
import { SearchBarService } from "../service/search-bar.service";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: "search-overlay",
  imports: [MatDivider,MatListModule,MatIcon,MatIconButton],
  templateUrl: "./search-overlay.component.html",
})
export class SearchOverlayComponent {
    searchBarService= inject(SearchBarService);
    recentSearches = computed(() => this.searchBarService.recentSearches().slice(0, 3));
    
    deleteRecentSearch(searchTerm: string) {
        this.searchBarService.deleteFromRecentSearch(searchTerm);
    }
    performSearch(searchTerm: string) {
        this.searchBarService.search(searchTerm);
    }
}