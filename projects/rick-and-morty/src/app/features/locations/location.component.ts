import { Component } from '@angular/core';
import { LocationListComponent } from '../location-list/location-list.component';

@Component({
  selector: 'jessie-locations',
  standalone: true,
  template: `<jessie-location-list />`,
  styleUrl: './location.component.css',
  imports: [LocationListComponent],
})
export default class LocationComponent {}
