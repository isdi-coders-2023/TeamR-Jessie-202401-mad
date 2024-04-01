import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterList, EpisodeList, LocationList } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class ApiRepoService {
  private urlBase = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterList> {
    return this.http.get<CharacterList>(`${this.urlBase}/character`);
  }

  getEpisodes(): Observable<EpisodeList> {
    return this.http.get<EpisodeList>(`${this.urlBase}/episode`);
  }

  getLocations(): Observable<LocationList> {
    return this.http.get<LocationList>(`${this.urlBase}/location`);
  }
}
