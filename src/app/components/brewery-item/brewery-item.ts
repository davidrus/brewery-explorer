import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreweryItemType } from '../../types/brewery';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-brewery-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brewery-item.html',
  styleUrl: './brewery-item.scss',
})
export class BreweryItemComponent {
  brewery = input<BreweryItemType>();
  favorites = input<number[]>([]);
  toggle = output<number>();

  isFavorite(id: number): boolean {
    return this.favorites().includes(id);
  }

  handleToggle(id: number) {
    if (this.auth.isAuthenticated$) {
      this.toggle.emit(id);
    }
  }

  constructor(public auth: AuthService) {}
}
