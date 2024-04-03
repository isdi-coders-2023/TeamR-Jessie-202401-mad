import { Component } from '@angular/core';
import { LocationListComponent } from '../location-list/location-list.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'jessie-locations',
  standalone: true,
  template: ` <jessie-header />
    <jessie-location-list />`,
  styleUrl: './location.component.css',
  imports: [LocationListComponent, HeaderComponent],
})
export default class LocationComponent {}
