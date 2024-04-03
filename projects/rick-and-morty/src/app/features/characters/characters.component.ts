import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { PaginationComponent } from '../shared/pagination/pagination.component';

@Component({
    selector: 'jessie-characters',
    standalone: true,
    template: `
  <jessie-header />
  <main>
    <jessie-pagination [dataType]="'character'" />
    <jessie-character-list />
  </main>
  <jessie-footer />`,
    styleUrl: './characters.component.css',
    imports: [CharacterListComponent, HeaderComponent, FooterComponent, PaginationComponent]
})
export default class CharactersComponent {}
