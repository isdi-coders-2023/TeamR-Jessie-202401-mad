import { Component, Input } from '@angular/core';
import { Episode } from '../../core/model/model';

@Component({
  selector: 'jessie-episode-card',
  standalone: true,
  imports: [],
  template: ` <li>
    <ul>
      <li class="episode-airDate">Air Date{{ episodeInfo.air_date }}</li>
      <li>
        <ul class="episode-name-container">
          <li class="episode-name">Name{{ episodeInfo.name }}</li>
        </ul>
      </li>

      <li>
        <ul class="episode-episode-container">
          <li class="episode-episode">Episode{{ episodeInfo.episode }}</li>
        </ul>
      </li>
    </ul>
  </li>`,
  styleUrl: './episode-card.component.css',
})
export class EpisodeCardComponent {
  @Input() episodeInfo!: Episode;
}
