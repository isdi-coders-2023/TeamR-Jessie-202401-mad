import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyList, CharacterList } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class PublicApiRepoService {
  private urlBase = 'https://rickandmortyapi.com/api';
  page: number = 1;

  constructor(private http: HttpClient) {}

  getData(dataType: string): Observable<AnyList> {
    return this.http.get<AnyList>(
      `${this.urlBase}/${dataType}?page=${this.page}`
    );
  }

  getFilteredCharacterData(
    status: string = '',
    species: string = '',
    gender: string = ''
  ): Observable<CharacterList> {
    return this.http.get<CharacterList>(
      `${this.urlBase}/character?page=${this.page}&status=${status}&species=${species}&gender=${gender}`
    );
  }
}
