import { Component, OnInit } from '@angular/core';
import { LocationListComponent } from '../location-list/location-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ScrollTopComponent } from '../shared/scroll-top/scroll-top.component';
import { Location } from '../../core/model/model';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'jessie-locations',
  standalone: true,
  template: `
    <jessie-header />
    <jessie-searchbar />
    <jessie-pagination [dataType]="'location'" [filteredValues]="{}" />
    <jessie-location-list [locationList]="locationList" />
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
export default class LocationComponent implements OnInit {
  locationList: Location[] = [];

  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.stateSrv.getAnyData('location').subscribe((locationsList) => {
      this.locationList = locationsList as Location[];
    });
  }
}
