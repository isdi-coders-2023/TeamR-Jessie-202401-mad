import { Component, OnInit } from '@angular/core';
import { EpisodesListComponent } from '../episodes-list/episodes-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";
import { PaginationComponent } from "../shared/pagination/pagination.component";
import { StateService } from '../../core/services/state.service';
import { Episode } from '../../core/model/model';

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
export default class EpisodesComponent implements OnInit {
  episodeList: Episode[] = [];

  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.stateSrv.getAnyData('episode').subscribe((episodeList) => {
      this.episodeList = episodeList as Episode[];
    });
  }}
