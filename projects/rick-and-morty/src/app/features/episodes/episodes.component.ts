import { Component } from '@angular/core';
import { EpisodesListComponent } from '../episodes-list/episodes-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';

@Component({
  selector: 'jessie-episodes',
  standalone: true,
  template: ` <jessie-header />
    <jessie-searchbar />
    <jessie-episodes-list />`,
  styleUrl: './episodes.component.css',
  imports: [EpisodesListComponent, HeaderComponent, SearchbarComponent],
})
export default class EpisodesComponent {}
