import { Component, Input } from '@angular/core';
import { StateService } from '../../../core/services/state.service';

@Component({
  selector: 'jessie-pagination',
  standalone: true,
  imports: [],
  template: `
    <div class="pagination-btns">
      <button class="pag-btn pag-previous" (click)="prevPage(dataType)">
        <i
          class="fa-solid fa-arrow-right fa-rotate-180"
          style="color: #092429;"
        ></i>
      </button>
      <button class="pag-btn pag-next" (click)="nextPage(dataType)">
        <i class="fa-solid fa-arrow-right" style="color: #092429;"></i>
      </button>
    </div>
  `,
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() dataType!: string;

  constructor(private stateSrv: StateService) {}

  prevPage(dataType: string) {
    this.stateSrv.previousData(dataType);
  }

  nextPage(dataType: string) {
    this.stateSrv.nextData(dataType);
  }
}
