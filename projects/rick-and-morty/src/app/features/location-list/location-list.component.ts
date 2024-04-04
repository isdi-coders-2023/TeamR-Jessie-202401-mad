import { Component, OnInit } from '@angular/core';
import { Location } from '../../core/model/model';
import { StateService } from '../../core/services/state.service';
import { LocationCardComponent } from '../location-card/location-card.component';

@Component({
  selector: 'jessie-location-list',
  standalone: true,
  template: `
  <ul class="location-list">
    @for (location of locationList; track $index) {
    <jessie-location-card [locationInfo]="location" />
    }
  </ul>
  `,
  styleUrl: './location-list.component.css',
  imports: [LocationCardComponent],
})
export class LocationListComponent implements OnInit {
  locationList!: Location[];

  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.stateSrv.getAnyData('location').subscribe((locationsList) => {
      this.locationList = locationsList as Location[];
    });
  }
}
