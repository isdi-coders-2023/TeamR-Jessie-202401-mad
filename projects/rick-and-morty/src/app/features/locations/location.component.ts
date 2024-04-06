import { Component } from '@angular/core';
import { LocationListComponent } from '../location-list/location-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'jessie-locations',
  standalone: true,
  template: `
    <jessie-header />
    <jessie-searchbar />
    <jessie-pagination />
    <jessie-location-list />
    <jessie-footer />
  `,
  styleUrl: './location.component.css',
  imports: [
    LocationListComponent,
    HeaderComponent,
    SearchbarComponent,
    PaginationComponent,
    FooterComponent,
  ],
})
export default class LocationComponent {}
