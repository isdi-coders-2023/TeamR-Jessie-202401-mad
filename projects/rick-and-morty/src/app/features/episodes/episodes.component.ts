import { Component } from '@angular/core';
import { EpisodesListComponent } from '../episodes-list/episodes-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";
import { PaginationComponent } from "../shared/pagination/pagination.component";

@Component({
    selector: 'jessie-episodes',
    standalone: true,
    template: ` <jessie-header />
    <jessie-pagination [dataType]="'episode'" />
    <jessie-episodes-list />
    <jessie-footer />`,
    styleUrl: './episodes.component.css',
    imports: [EpisodesListComponent, FooterComponent, PaginationComponent, HeaderComponent]
})
export default class EpisodesComponent {}
