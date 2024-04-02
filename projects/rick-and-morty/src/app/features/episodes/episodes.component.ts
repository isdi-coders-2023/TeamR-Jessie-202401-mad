import { Component } from '@angular/core';
import { EpisodesListComponent } from '../episodes-list/episodes-list.component';

@Component({
  selector: 'jessie-episodes',
  standalone: true,
  imports: [EpisodesListComponent],
  template: `<jessie-episodes-list />`,
  styleUrl: './episodes.component.css',
})
export default class EpisodesComponent {}
