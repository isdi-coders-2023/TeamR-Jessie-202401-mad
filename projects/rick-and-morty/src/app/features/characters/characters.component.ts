import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'jessie-characters',
  standalone: true,
  template: `<jessie-character-list />`,
  styleUrl: './characters.component.css',
  imports: [CharacterListComponent],
})
export default class CharactersComponent {}
