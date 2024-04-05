import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'jessie-filter',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="filter">
      <label for="{{ name }}">{{ selected ? selected : name }}</label>
      <select [name]="name" [(ngModel)]="selected">
        @for (option of options; track $index) {
        <option [value]="option">{{ option }}</option>
        }
      </select>
      <i class="fa-solid fa-caret-down"></i>
    </div>
  `,
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() name!: string;
  options: string[] = ['gender', 'example'];
  @Output() selectedChange = new EventEmitter<string>();
  selected = '';

  emitSelected(): void {
    this.selectedChange.emit(this.selected);
  }
}
