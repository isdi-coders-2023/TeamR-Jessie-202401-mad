import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Any } from '../model/model';
import { ApiRepoService } from './api-repo.service';
import { routes } from '../../app.routes';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  static nextData(nextData: any) {
    throw new Error('Method not implemented.');
  }
  private anyList$: BehaviorSubject<Any[]> = new BehaviorSubject<Any[]>([]);
  // private episodeList$: BehaviorSubject<Episode[]> = new BehaviorSubject<
  //   Episode[]
  // >([]);
  // private locationList$: BehaviorSubject<Location[]> = new BehaviorSubject<
  //   Location[]
  // >([]);

  constructor(private ApiRepoSrv: ApiRepoService) {}

  fetchData(dataType: string) {
    this.ApiRepoSrv.getData(dataType).subscribe((data) => {
      this.anyList$.next(data.results);
    });
  }

  getAnyData(dataType: string) {
    this.fetchData(dataType);
    return this.anyList$.asObservable();
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

  setRoutes() {
    return routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
