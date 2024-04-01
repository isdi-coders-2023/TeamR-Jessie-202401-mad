import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character, Episode, Location } from '../model/model';
import { ApiRepoService } from './api-repo.service';
import { routes } from '../../app.routes';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private characterList$: BehaviorSubject<Character[]> = new BehaviorSubject<
    Character[]
  >([]);
  private episodeList$: BehaviorSubject<Episode[]> = new BehaviorSubject<
    Episode[]
  >([]);
  private locationList$: BehaviorSubject<Location[]> = new BehaviorSubject<
    Location[]
  >([]);

  constructor(private ApiRepoSrv: ApiRepoService) {}

  fetchCharacters() {
    this.ApiRepoSrv.getCharacters().subscribe((characters) => {
      this.characterList$.next(characters.results);
    });
  }

  fetchEpisodes() {
    this.ApiRepoSrv.getEpisodes().subscribe((episodes) => {
      this.episodeList$.next(episodes.results);
    });
  }

  fetchLocations() {
    this.ApiRepoSrv.getLocations().subscribe((locations) => {
      this.locationList$.next(locations.results);
    });
  }

  get character() {
    return this.characterList$.asObservable();
  }

  get episode() {
    return this.episodeList$.asObservable();
  }

  get location() {
    return this.locationList$.asObservable();
  }

  setRoutes() {
    return routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
