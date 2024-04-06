import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterCreateDto } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class PrivateApiRepoService {
  private privUrl = 'http://localhost:3000/favorites';
  page: number = 1;

  constructor(private http: HttpClient) {}

  getPrivateData(): Observable<Character[]> {
    return this.http.get<Character[]>(this.privUrl);
  }

  getCharacterById(id: number): Observable<Character> {
    const url = `${this.privUrl}/${id}`;
    return this.http.get<Character>(url);
  }

  updateCharacter(item: Character): Observable<Character> {
    const url = `${this.privUrl}/${item.id}`;
    return this.http.patch<Character>(url, item);
  }

  createCharacter(item: Character): Observable<Character> {
    const fItem: CharacterCreateDto = { ...item, id: String(item.id) };
    return this.http.post<Character>(this.privUrl, fItem);
  }

  deleteCharacter(id: number): Observable<Character> {
    const url = `${this.privUrl}/${id}`;
    return this.http.delete<Character>(url);
  }
}
