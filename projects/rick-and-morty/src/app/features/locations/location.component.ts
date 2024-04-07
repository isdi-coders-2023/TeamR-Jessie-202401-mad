import { Component } from '@angular/core';
import { LocationListComponent } from '../location-list/location-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ScrollTopComponent } from '../shared/scroll-top/scroll-top.component';

@Component({
  selector: 'jessie-locations',
  standalone: true,
  template: `
    <jessie-header />
    <jessie-searchbar />
    <jessie-pagination />
    <jessie-location-list />
    <jessie-scroll-top />
    <jessie-footer />
  `,
  styleUrl: './location.component.css',
  imports: [
    LocationListComponent,
    HeaderComponent,
    SearchbarComponent,
    PaginationComponent,
    FooterComponent,
    ScrollTopComponent,
  ],
})
export default class LocationComponent {}
