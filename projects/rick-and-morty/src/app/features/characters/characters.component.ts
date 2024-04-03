import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'jessie-characters',
  standalone: true,
  template: ` <jessie-header />
    <jessie-pagination [dataType]="'character'" />
    <jessie-character-list />`,
  styleUrl: './characters.component.css',
  imports: [CharacterListComponent, PaginationComponent, HeaderComponent],
})
export default class CharactersComponent {}
