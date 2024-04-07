import { Component, Input } from '@angular/core';
import { Character } from '../../core/model/model';

@Component({
  selector: 'jessie-character-card',
  standalone: true,
  imports: [],
  template: `
    @if (characterInfo) {
    <ul>
      <li>
        <img
          class="character-img"
          src="{{ characterInfo.image }}"
          alt="Imagen de {{ characterInfo.name }}"
        />
      </li>
      <li>
        <ul class="character-ul">
          <li>
            <ul class="character-name-container">
              @if (characterInfo.name) {
              <li class="character-name">{{ characterInfo.name }}</li>
              }
              <li>
                <ul class="character-status-container">
                  <li class="character-status">{{ characterInfo.status }}</li>
                  <li>
                    @if (characterInfo.status === 'Alive') {
                    <div class="status-circle status-alive"></div>
                    } @else if (characterInfo.status === 'Dead') {
                    <div class="status-circle status-dead"></div>
                    } @else {
                    <div class="status-circle status-unknown"></div>
                    }
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="character-species">
            Species: {{ characterInfo.species }}
          </li>
          <li class="character-gender">Gender: {{ characterInfo.gender }}</li>
          @if (characterInfo.location) {
          <li class="character-location">
            Location: {{ characterInfo.location.name }}
          </li>
          }
        </ul>
      </li>
    </ul>
    }
  `,
  styleUrl: './character-card.component.css',
})
export class CharacterCardComponent {
  @Input() characterInfo!: Character;
}
