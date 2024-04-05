import { Component, Input } from '@angular/core';
import { Location } from '../../core/model/model';

@Component({
  selector: 'jessie-location-card',
  standalone: true,
  imports: [],
  template: ` 
  <li class="location-card">
    <ul>
      <li>
        <ul class="location-name-container">
          <li class="episode-name">{{ locationInfo.name }}</li>
        </ul>
      </li>
      <li>
        <ul class="episode-episode-container">
          <li class="episode-episode">Type {{ locationInfo.type }}</li>
        </ul>
      </li>
      <li class="episode-airDate">Dimension {{ locationInfo.dimension }}</li>
    </ul>
  </li>
  `,
  styleUrl: './location-card.component.css',
})
export class LocationCardComponent {
  @Input() locationInfo!: Location;
}
