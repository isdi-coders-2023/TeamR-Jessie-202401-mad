import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { StateService } from '../../../core/services/state.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'jessie-filter-form',
  standalone: true,
  template: `
    <form class="filter-form" #filterForm="ngForm" (ngSubmit)="onSubmit()">
      <div class="filter-group">
        @for (property of filteredProperties; track $index){
        <jessie-filter
          [name]="property"
          [dataType]="'character'"
          (valueChange)="onFilteredValueChanged($event, property)"
        />
        }
      </div>
      <button class="filter-btn" type="submit">Aplicar filtros</button>
    </form>
  `,
  styleUrl: './filter-form.component.css',
  imports: [FilterComponent, FormsModule],
})
export class FilterFormComponent implements OnChanges {
  @Input() dataType!: string;
  @Input() properties!: string[];
  filteredProperties!: string[];
  filteredValues: { [key: string]: string } = {};
  @Output() filterValuesChange: EventEmitter<{ [key: string]: string }> =
    new EventEmitter<{ [key: string]: string }>();

  constructor(private stateSrv: StateService) {}

  ngOnChanges(): void {
    this.filteredProperties = this.properties.filter((p) =>
      this.filterProperties(p)
    );
  }

  filterProperties(property: string): boolean {
    return this.stateSrv.filterProperties(this.dataType, property);
  }

  onFilteredValueChanged(value: string, property: string) {
    this.filteredValues[property] = value;
  }

  onSubmit() {
    this.filterValuesChange.emit(this.filteredValues);
  }
}
