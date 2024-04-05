import { Component, Input } from '@angular/core';
import { Character } from '../../core/model/model';

@Component({
  selector: 'jessie-character-card',
  standalone: true,
  imports: [],
  template: `
    <li class="character-card">
      <ul class="info-img">
        <li>
          <img
            class="character-img"
            src="{{ characterInfo.image }}"
            alt="Imagen de {{ characterInfo.name }}"
          />
        </li>
      </ul>
      <ul class="info-text">
        <li>
          <ul class="character-name-container">
            <li class="character-name">{{ characterInfo.name }}</li>
            <li>
              <ul class="character-status-container">
                <li class="character-status">{{ characterInfo.status }}</li>
                @if (characterInfo.status === 'Alive') {
                <div class="status-circle status-alive"></div>
                } @else if (characterInfo.status === 'Dead') {
                <div class="status-circle status-dead"></div>
                } @else {
                <div class="status-circle status-unknown"></div>
                }
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="more-info-container">
        <li class="character-species">Species: {{ characterInfo.species }}</li>
        <li class="character-gender">Gender: {{ characterInfo.gender }}</li>
        <li class="character-location">
          Location: {{ characterInfo.location.name }}
        </li>
      </ul>
    </li>
  `,
  styleUrl: './character-card.component.css',
})
export class CharacterCardComponent {
  @Input() characterInfo!: Character;
}
