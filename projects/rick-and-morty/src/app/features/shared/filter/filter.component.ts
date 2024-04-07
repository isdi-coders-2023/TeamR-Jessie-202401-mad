import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../../core/services/state.service';

@Component({
  selector: 'jessie-filter',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="filter">
      <label for="{{ name }}">{{ selected ? selected : name }}</label>
      <select
        aria-label="Individual filter"
        [name]="name"
        [(ngModel)]="selected"
        (change)="onValueChanged()"
      >
        @for (option of options; track $index) {
        <option [value]="option">{{ option }}</option>
        }
      </select>
      <i class="fa-solid fa-caret-down"></i>
    </div>
  `,
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  @Input() name!: string;
  @Input() dataType!: string;
  options: string[] = [];
  selected = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.options = this.filterPropertyOptions();
  }

  filterPropertyOptions(): string[] {
    return this.stateSrv.filterPropertyOptions(this.dataType, this.name);
  }

  onValueChanged() {
    this.valueChange.emit(this.selected);
  }
}
