import { Component, OnInit } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { HeaderComponent } from '../shared/header/header.component';
import { StateService } from '../../core/services/state.service';
import { Character } from '../../core/model/model';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';
import { FilterComponent } from '../shared/filter/filter.component';
import { FilterFormComponent } from '../shared/filter-form/filter-form.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { ScrollTopComponent } from '../shared/scroll-top/scroll-top.component';

@Component({
  selector: 'jessie-characters',
  standalone: true,
  template: `
    <jessie-header />
    <jessie-searchbar />
    <jessie-filter-form
      [properties]="characterProperties"
      [dataType]="'character'"
      (filterValuesChange)="onFilterValuesChange($event)"
    />
    <div>
      <jessie-pagination
        [dataType]="'character'"
        [filteredValues]="filteredValues"
      />
      <jessie-add-button />
    </div>
    <jessie-character-list [characterList]="characterList" />
    <jessie-scroll-top />
    <jessie-footer />
  `,
  styleUrl: './characters.component.css',
  imports: [
    CharacterListComponent,
    PaginationComponent,
    HeaderComponent,
    SearchbarComponent,
    FilterComponent,
    FilterFormComponent,
    FooterComponent,
    AddButtonComponent,
    ScrollTopComponent,
  ],
})
export default class CharactersComponent implements OnInit {
  characterList: Character[] = [];
  characterProperties: string[] = [];
  propertyOptions: { [key: string]: string[] } = {};
  filteredValues: { [key: string]: string } = {};

  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.stateSrv.getAnyData('character').subscribe((characterList) => {
      this.characterList = characterList as Character[];
      if (this.characterList.length > 0) {
        this.characterProperties = Object.keys(this.characterList[0]);
      }
    });
  }

  onFilterValuesChange(filteredValues: { [key: string]: string }) {
    this.stateSrv
      .getFilteredCharacterData(filteredValues)
      .subscribe((characterList) => {
        this.filteredValues = filteredValues;
        this.characterList = characterList as Character[];
      });
  }
}
