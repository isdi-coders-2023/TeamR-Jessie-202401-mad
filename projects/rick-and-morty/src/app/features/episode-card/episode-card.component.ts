import { Component, Input } from '@angular/core';
import { Episode } from '../../core/model/model';

@Component({
  selector: 'jessie-episode-card',
  standalone: true,
  imports: [],
  template: `
    <ul class="episode-card">
      <li class="episode-name">{{ episodeInfo.name }}</li>
      <li class="episode-episode">Episode: {{ episodeInfo.episode }}</li>
      <li class="episode-airDate">Air Date: {{ episodeInfo.air_date }}</li>
    </ul>
  `,
  styleUrl: './episode-card.component.css',
})
export class EpisodeCardComponent {
  @Input() episodeInfo!: Episode;
}
