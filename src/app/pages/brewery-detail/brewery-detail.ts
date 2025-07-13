import { Component, inject } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';

@Component({
  selector: 'app-brewery-detail',
  imports: [],
  templateUrl: './brewery-detail.html',
  styleUrl: './brewery-detail.scss',
  standalone: true,
})
export class BreweryDetailComponent {
  private breweryService = inject(BreweryService);
}
