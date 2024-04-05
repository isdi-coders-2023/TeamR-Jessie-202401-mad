import { Component, OnInit } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { HeaderComponent } from '../shared/header/header.component';
import { StateService } from '../../core/services/state.service';
import { Character } from '../../core/model/model';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
    selector: 'jessie-characters',
    standalone: true,
    template: ` <jessie-header />
    <jessie-pagination [dataType]="'character'" />
    <jessie-character-list [characterList]="characterList" />
    <jessie-footer />`,
    styleUrl: './characters.component.css',
    imports: [CharacterListComponent, PaginationComponent, HeaderComponent, FooterComponent]
})
export default class CharactersComponent implements OnInit {
  characterList: Character[] = [];

  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.stateSrv.getAnyData('character').subscribe((characterList) => {
      this.characterList = characterList as Character[];
    });
  }
}
