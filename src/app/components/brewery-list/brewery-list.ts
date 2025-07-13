import { Component, inject, input, signal } from '@angular/core';
import { BreweryItemType } from '../../types/brewery';
import { CommonModule } from '@angular/common';
import { BreweryItemComponent } from '../brewery-item/brewery-item';
import { FavoritesService } from '../../services/favorites.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-brewery-list',
  imports: [CommonModule, BreweryItemComponent],
  standalone: true,
  templateUrl: './brewery-list.html',
  styleUrl: './brewery-list.scss',
})
export class BreweryListComponent {
  breweries = input<BreweryItemType[]>([]);
  favoritesService = inject(FavoritesService);
  readonly favorites = this.favoritesService.getFavorites();

  toggleFavorite(id: number) {
    console.log('Toggling favorite for ID:', id);
    this.favoritesService.toggleFavorite(id);
  }
}
