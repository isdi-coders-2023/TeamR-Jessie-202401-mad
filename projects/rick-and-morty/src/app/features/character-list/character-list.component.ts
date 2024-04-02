import { Component, OnInit } from '@angular/core';
import { Character } from '../../core/model/model';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'jessie-character-list',
  standalone: true,
  template: `
    <ul class="character-list">
      @for (character of characterList; track $index) {
      <jessie-character-card [characterInfo]="character" />
      }
    </ul>
  `,
  styleUrl: './character-list.component.css',
  imports: [CharacterCardComponent],
})
export class CharacterListComponent implements OnInit {
  characterList!: Character[];

  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.stateSrv.getAnyData('character').subscribe((characterList) => {
      this.characterList = characterList as Character[];
    });
  }
}
