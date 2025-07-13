import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites = signal<number[]>([]);

  constructor() {
    // Load from localStorage on init
    if (typeof localStorage !== 'undefined') {
      const stored = JSON.parse(
        localStorage.getItem('favoriteBreweries') ?? '[]'
      );
      this.favorites.set(stored);
    }

    effect(() => {
      // Save to localStorage whenever favorites change
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          'favoriteBreweries',
          JSON.stringify(this.favorites())
        );
      }
    });
  }
  getFavorites() {
    return this.favorites.asReadonly();
  }

  toggleFavorite(breweryId: number) {
    this.favorites.update((currentFavorites) => {
      return currentFavorites.includes(breweryId)
        ? currentFavorites.filter((id) => id !== breweryId)
        : [...currentFavorites, breweryId];
    });
  }
}
