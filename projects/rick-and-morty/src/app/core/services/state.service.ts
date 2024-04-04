import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Any, Character } from '../model/model';
import { PublicApiRepoService } from './public-api-repo.service';
import { routes } from '../../app.routes';
import { PrivateApiRepoService } from './private-api-repo.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private anyList$: BehaviorSubject<Any[]> = new BehaviorSubject<Any[]>([]);
  private privateList$: BehaviorSubject<Character[]> = new BehaviorSubject<
    Character[]
  >([]);
  // private episodeList$: BehaviorSubject<Episode[]> = new BehaviorSubject<
  //   Episode[]
  // >([]);
  // private locationList$: BehaviorSubject<Location[]> = new BehaviorSubject<
  //   Location[]
  // >([]);

  constructor(
    private ApiRepoSrv: PublicApiRepoService,
    private PrivateApiRepoSrv: PrivateApiRepoService
  ) {}

  fetchData(dataType: string) {
    this.ApiRepoSrv.getData(dataType).subscribe((data) => {
      this.anyList$.next(data.results);
    });
  }

  fetchPrivateData() {
    this.PrivateApiRepoSrv.getPrivateData().subscribe((data) => {
      this.privateList$.next(data);
    });
  }

  getAnyData(dataType: string) {
    this.fetchData(dataType);
    return this.anyList$.asObservable();
  }

  getPrivateData() {
    this.fetchPrivateData();
    return this.privateList$.asObservable();
  }

  nextData(dataType: string) {
    if (this.ApiRepoSrv.page < 42) {
      this.ApiRepoSrv.page++;
      this.ApiRepoSrv.getData(dataType);
      this.fetchData(dataType);
    }
  }

  previousData(dataType: string) {
    if (this.ApiRepoSrv.page > 1) {
      this.ApiRepoSrv.page--;
      this.ApiRepoSrv.getData(dataType);
      this.fetchData(dataType);
    }
  }

  deleteCharacter(id: number) {
    this.PrivateApiRepoSrv.deleteCharacterUrl(id).subscribe(() => {
      this.PrivateApiRepoSrv.getPrivateData().subscribe((data) => {
        this.privateList$.next(data);
      });
    });
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
