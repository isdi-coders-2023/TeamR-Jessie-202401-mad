import { Component, Input } from '@angular/core';
import { Episode } from '../../core/model/model';
import { StateService } from '../../core/services/state.service';
import { EpisodeCardComponent } from '../episode-card/episode-card.component';

@Component({
  selector: 'jessie-episodes-list',
  standalone: true,
  imports: [EpisodeCardComponent],
  template: ` <ul class="episode-list">
    @for (episode of episodeList; track $index) {
    <li>
      <jessie-episode-card [episodeInfo]="episode" />
    </li>
    }
  </ul>`,
  styleUrl: './episodes-list.component.css',
})
export class EpisodesListComponent {
  @Input() episodeList!: Episode[];

  constructor(private stateSrv: StateService) {}
}
