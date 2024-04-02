import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyList } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class ApiRepoService {
  private urlBase = 'https://rickandmortyapi.com/api';
  page: number = 1;

  constructor(private http: HttpClient) {}

  getData(dataType: string): Observable<AnyList> {
    return this.http.get<AnyList>(
      `${this.urlBase}/${dataType}?page=${this.page}`
    );
  }
}
