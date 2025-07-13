import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BreweryItemType } from '../types/brewery';

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://api.openbrewerydb.org/v1/breweries';

  findBreweries(searchTerm: string): Observable<BreweryItemType[]> {
    return this.http
      .get<BreweryItemType[]>(`${this.API_URL}?by_city=${searchTerm}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching breweries:', error);
          return throwError(() => new Error(error));
        })
      );
  }
}
