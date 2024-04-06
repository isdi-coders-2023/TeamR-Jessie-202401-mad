import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { StateService } from '../../core/services/state.service';
import { Character } from '../../core/model/model';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharacterListComponent } from '../character-list/character-list.component';
import { PrivateApiRepoService } from '../../core/services/private-api-repo.service';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';

@Component({
  selector: 'jessie-favorites',
  standalone: true,
  template: `
    <jessie-header />
    <jessie-searchbar />
    <jessie-character-list
      [characterList]="characterList"
      [isCharacterPriv]="isCharacterPriv"
    />
  `,
  styleUrl: './favorites.component.css',
  imports: [
    HeaderComponent,
    CharacterCardComponent,
    CharacterListComponent,
    SearchbarComponent,
  ],
})
export default class FavoritesComponent implements OnInit {
  characterList!: Character[];
  isCharacterPriv = true;

  constructor(
    private stateSrv: StateService,
    private privApiRepo: PrivateApiRepoService
  ) {}

  ngOnInit() {
    this.stateSrv.getPrivateData().subscribe((characterList) => {
      this.characterList = characterList as Character[];
    });
  }
}
