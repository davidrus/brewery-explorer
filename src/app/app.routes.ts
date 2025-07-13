import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/search/search').then((m) => m.SearchComponent),
  },
  {
    path: 'brewery-detail/:id',
    loadComponent: () =>
      import('./pages/brewery-detail/brewery-detail').then(
        (m) => m.BreweryDetailComponent
      ),
  },
];
