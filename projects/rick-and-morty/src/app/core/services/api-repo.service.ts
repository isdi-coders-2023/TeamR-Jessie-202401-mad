import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, Episode } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class ApiRepoService {
  private urlBase = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {
    console.log(this.getCharacters);
  }

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(`${this.urlBase}/character`);
  }

  getEpisodes(): Observable<Episode> {
    return this.http.get<Episode>(`${this.urlBase}/episode`);
  }

  getLocations(): Observable<Location> {
    return this.http.get<Location>(`${this.urlBase}/location`);
  }
}
