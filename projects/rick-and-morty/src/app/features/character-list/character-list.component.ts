import { Component, Input } from '@angular/core';
import { Character } from '../../core/model/model';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'jessie-character-list',
  standalone: true,
  template: `
    <ul class="character-list">
      @for (character of characterList; track $index) {
      <li class="character-card">
        @if (isCharacterPriv) {
        <i
          class="fa-solid fa-xmark close-btn"
          tabindex="-1"
          (click)="deleteCharacter(character.id)"
          (keyup.enter)="deleteCharacter(character.id)"
        ></i>
        } @if (!isCharacterPriv) {
        <i
          class="fa-{{
            !character.favorite ? 'regular' : 'solid'
          }} fa-heart favorite-btn"
          tabindex="-1"
          (click)="addFavorite(character)"
          (keyup.enter)="addFavorite(character)"
        ></i>
        }
        <jessie-character-card [characterInfo]="character" />
      </li>
      }
    </ul>
  `,
  styleUrl: './character-list.component.css',
  imports: [CharacterCardComponent],
})
export class CharacterListComponent {
  @Input() characterList!: Character[];
  @Input() isCharacterPriv: boolean = false;

  constructor(private stateSrv: StateService) {}

  deleteCharacter(id: number) {
    this.stateSrv.deleteCharacter(id);
  }

  addFavorite(character: Character) {
    if (!character.favorite) {
      character.favorite = true;
      this.stateSrv.addFavorite(character);
    } else {
      console.log('already favorite!');
    }
  }
}
