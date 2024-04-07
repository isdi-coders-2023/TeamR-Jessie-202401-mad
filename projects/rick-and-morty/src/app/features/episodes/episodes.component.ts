import { Component, OnInit } from '@angular/core';
import { EpisodesListComponent } from '../episodes-list/episodes-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { Episode } from '../../core/model/model';
import { StateService } from '../../core/services/state.service';
import { FooterComponent } from '../shared/footer/footer.component';
import { ScrollTopComponent } from '../shared/scroll-top/scroll-top.component';

@Component({
  selector: 'jessie-episodes',
  standalone: true,
  template: `
    <jessie-header />
    <jessie-searchbar />
    <jessie-pagination [dataType]="'episode'" [filteredValues]="{}" />
    <jessie-episodes-list [episodeList]="episodeList" />
    <jessie-scroll-top />
    <jessie-footer />
  `,
  styleUrl: './episodes.component.css',
  imports: [
    EpisodesListComponent,
    HeaderComponent,
    SearchbarComponent,
    PaginationComponent,
    FooterComponent,
    ScrollTopComponent,
  ],
})
export default class EpisodesComponent implements OnInit {
  episodeList: Episode[] = [];

  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.stateSrv.getAnyData('episode').subscribe((episodeList) => {
      this.episodeList = episodeList as Episode[];
    });
  }
}
