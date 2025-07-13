import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from '../../components/search-form/search-form';
import { BreweryService } from '../../services/brewery.service';
import { BreweryListComponent } from '../../components/brewery-list/brewery-list';
import { BreweryItemType } from '../../types/brewery';
import { AuthButtonComponent } from '../../components/auth-button/auth-button';
import { startWith, Subject, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [
    ReactiveFormsModule,
    SearchFormComponent,
    BreweryListComponent,
    AuthButtonComponent,
    CommonModule,
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
  standalone: true,
})
export class SearchComponent {
  private breweryService = inject(BreweryService);
  breweries = signal<BreweryItemType[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);

  processSearch(searchTerm: string) {
    this.isLoading.set(true);
    this.error.set(null);

    this.breweryService.findBreweries(searchTerm).subscribe({
      next: (data) => {
        this.breweries.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(
          err.message || 'An error occurred while fetching breweries.'
        );
        this.isLoading.set(false);
      },
    });
  }
}
