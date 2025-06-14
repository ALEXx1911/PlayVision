import { effect, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SearchBarService {
    overlayOpen = signal<boolean>(false);
    recentSearches = signal<string[]>([]);
    searchTerm = signal<string>("");

    constructor() {
      if (typeof window !== "undefined") {
        const data = window.localStorage.getItem("recentSearches");
        if (data) {
          this.recentSearches.set(JSON.parse(data));
        }
        this.saveLocalStorage= effect(() => {
          window.localStorage.setItem("recentSearches", JSON.stringify(this.recentSearches()));
        });
      }
    }

    search(newSearchTerm: string) {
        //Funcionalidad de busqueda
        this.searchTerm.set(newSearchTerm);
        this.overlayOpen.set(false);
        this.addToRecentSearches(newSearchTerm);
    }

    clearSearch() {
        this.searchTerm.set("");
        this.overlayOpen.set(true);
    }

    addToRecentSearches(searchTerm: string) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
        if (this.recentSearches().includes(lowerCaseSearchTerm)) {
            return;
        }
        this.recentSearches.update((searches) => [searchTerm, ...searches]);
        //this.recentSearches.set([
        //    lowerCaseSearchTerm,
        //    ...this.recentSearches().filter((term) => term !== lowerCaseSearchTerm),
        //]);
      }
    deleteFromRecentSearch(searchTerm: string) {
      console.log("Borrando");
        this.recentSearches.set(this.recentSearches().filter(term => term !== searchTerm));
    }

    saveLocalStorage = effect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("recentSearches", JSON.stringify(this.recentSearches()));
        }
    });

}