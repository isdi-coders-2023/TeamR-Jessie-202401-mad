import { Component } from '@angular/core';
import { EpisodesListComponent } from '../episodes-list/episodes-list.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'jessie-episodes',
  standalone: true,
  template: ` <jessie-header />
    <jessie-episodes-list />`,
  styleUrl: './episodes.component.css',
  imports: [EpisodesListComponent, HeaderComponent],
})
export default class EpisodesComponent {}
