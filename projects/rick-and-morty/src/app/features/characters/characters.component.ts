import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
    selector: 'jessie-characters',
    standalone: true,
    template: ` <jessie-header />
    <jessie-pagination [dataType]="'character'" />
    <jessie-character-list />
    <jessie-footer />`,
    styleUrl: './characters.component.css',
    imports: [CharacterListComponent, PaginationComponent, HeaderComponent, FooterComponent]
})
export default class CharactersComponent {}
