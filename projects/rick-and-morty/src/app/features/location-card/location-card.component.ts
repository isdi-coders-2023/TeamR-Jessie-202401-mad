import { Component, Input } from '@angular/core';
import { Location } from '../../core/model/model';

@Component({
  selector: 'jessie-location-card',
  standalone: true,
  imports: [],
  template: `
    <li class="location-card">
      <ul>
        <li class="location-name">{{ locationInfo.name }}</li>
        <li>Type {{ locationInfo.type }}</li>
        <li class="episode-airDate">Dimension {{ locationInfo.dimension }}</li>
      </ul>
    </li>
  `,
  styleUrl: './location-card.component.css',
})
export class LocationCardComponent {
  @Input() locationInfo!: Location;
}
