import { Component } from '@angular/core';
import { LocationListComponent } from '../location-list/location-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";
import { PaginationComponent } from "../shared/pagination/pagination.component";

@Component({
    selector: 'jessie-locations',
    standalone: true,
    template: ` <jessie-header />
    <jessie-pagination [dataType]="'location'" />
    <jessie-location-list />
    <jessie-footer />`,
    styleUrl: './location.component.css',
    imports: [LocationListComponent, HeaderComponent, FooterComponent, PaginationComponent]
})
export default class LocationComponent {}
