import { Component } from '@angular/core';
import { LocationListComponent } from '../location-list/location-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';

@Component({
  selector: 'jessie-locations',
  standalone: true,
  template: ` <jessie-header />
    <jessie-searchbar />
    <jessie-location-list />`,
  styleUrl: './location.component.css',
  imports: [LocationListComponent, HeaderComponent, SearchbarComponent],
})
export default class LocationComponent {}
