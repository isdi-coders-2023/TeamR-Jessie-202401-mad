import { Component, Input } from '@angular/core';
import { Location } from '../../core/model/model';
import { StateService } from '../../core/services/state.service';
import { LocationCardComponent } from '../location-card/location-card.component';

@Component({
  selector: 'jessie-location-list',
  standalone: true,
  template: ` <ul class="location-list">
    @for (location of locationList; track $index) {
    <li>
      <jessie-location-card [locationInfo]="location" />
    </li>
    }
  </ul>`,
  styleUrl: './location-list.component.css',
  imports: [LocationCardComponent],
})
export class LocationListComponent {
  @Input() locationList!: Location[];

  constructor(private stateSrv: StateService) {}
}
