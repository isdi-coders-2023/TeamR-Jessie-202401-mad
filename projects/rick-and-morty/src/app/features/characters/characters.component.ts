import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';

@Component({
  selector: 'jessie-characters',
  standalone: true,
  template: ` <jessie-pagination [dataType]="'character'" />
    <jessie-character-list />`,
  styleUrl: './characters.component.css',
  imports: [CharacterListComponent, PaginationComponent],
})
export default class CharactersComponent {}
