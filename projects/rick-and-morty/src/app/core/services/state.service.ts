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

  fetchFilteredCharacterData(
    status: string = '',
    species: string = '',
    gender: string = ''
  ) {
    this.ApiRepoSrv.getFilteredCharacterData(status, species, gender).subscribe(
      (data) => {
        this.anyList$.next(data.results);
      }
    );
  }

  getAnyData(dataType: string) {
    this.fetchData(dataType);
    return this.anyList$.asObservable();
  }

  getPrivateData() {
    this.fetchPrivateData();
    return this.privateList$.asObservable();
  }

  getFilteredCharacterData(filters: {
    status?: string;
    species?: string;
    gender?: string;
  }) {
    this.ApiRepoSrv.page = 1;
    const { status = '', species = '', gender = '' } = filters;
    this.fetchFilteredCharacterData(status, species, gender);
    return this.anyList$.asObservable();
  }

  nextData(
    dataType: string,
    filters: {
      status?: string;
      species?: string;
      gender?: string;
    }
  ) {
    const { status = '', species = '', gender = '' } = filters;
    switch (dataType) {
      case 'character':
        this.ApiRepoSrv.page++;
        this.ApiRepoSrv.getFilteredCharacterData(status, species, gender);
        this.fetchFilteredCharacterData(status, species, gender);
        break;
      case 'episode':
        this.ApiRepoSrv.page++;
        this.ApiRepoSrv.getData('episode');
        this.fetchData('episode');
        break;
      case 'location':
        this.ApiRepoSrv.page++;
        this.ApiRepoSrv.getData('location');
        this.fetchData('location');
        break;
      default:
        break;
    }
  }

  previousData(
    dataType: string,
    filters: {
      status?: string;
      species?: string;
      gender?: string;
    }
  ) {
    if (this.ApiRepoSrv.page <= 1) {
      return;
    }
    const { status = '', species = '', gender = '' } = filters;
    switch (dataType) {
      case 'character':
        this.ApiRepoSrv.page--;
        this.ApiRepoSrv.getFilteredCharacterData(status, species, gender);
        this.fetchFilteredCharacterData(status, species, gender);
        break;
      case 'episode':
        this.ApiRepoSrv.page--;
        this.ApiRepoSrv.getData('episode');
        this.fetchData('episode');
        break;
      case 'location':
        this.ApiRepoSrv.page--;
        this.ApiRepoSrv.getData('location');
        this.fetchData('location');
        break;
      default:
        break;
    }
  }

  deleteCharacter(id: number) {
    this.PrivateApiRepoSrv.deleteCharacter(id).subscribe({
      next: () => {
        this.PrivateApiRepoSrv.getPrivateData().subscribe((data) => {
          this.privateList$.next(data);
        });
      },
      error: (error) => {
        console.error('Error deleting character:', error);
      },
    });
  }

  addFavorite(character: Character) {
    this.PrivateApiRepoSrv.createCharacter(character).subscribe(() => {
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

  filterProperties(dataType: string, property: string): boolean {
    switch (dataType) {
      case 'character':
        if (
          property === 'status' ||
          property === 'gender' ||
          property === 'species'
        ) {
          return true;
        }
        return false;
      default:
        return false;
    }
  }

  filterPropertyOptions(dataType: string, name: string) {
    switch (dataType) {
      case 'character':
        if (name === 'status') {
          return ['Alive', 'Dead', 'unknown'];
        } else if (name === 'species') {
          return [
            'Human',
            'Humanoid',
            'Animal',
            'Alien',
            'Disease',
            'Mythological Creature',
            'Robot',
            'unknown',
          ];
        } else if (name === 'gender') {
          return ['Male', 'Female', 'unknown'];
        }
        return ['unknown'];
      default:
        return ['unknown'];
    }
  }
}
