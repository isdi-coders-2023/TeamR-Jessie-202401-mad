import { Component, Input, OnChanges } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { StateService } from '../../../core/services/state.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'jessie-filter-form',
  standalone: true,
  template: `
    <form class="filter-form" (ngSubmit)="onSubmit()" action="">
      <div class="filter-group">
        @for (property of filteredProperties; track $index){
        <jessie-filter
          [name]="property"
          (selectedChange)="handleSelected($event, property)"
        />
        }
      </div>
      <input class="filter-btn" type="submit" value="Aplicar filtros" />
    </form>
  `,
  styleUrl: './filter-form.component.css',
  imports: [FilterComponent, FormsModule],
})
export class FilterFormComponent implements OnChanges {
  @Input() dataType!: string;
  @Input() properties!: string[];
  filteredProperties!: string[];
  selectedValues: { [key: string]: string } = {};

  constructor(private stateSrv: StateService) {}

  ngOnChanges(): void {
    this.filteredProperties = this.properties.filter((p) =>
      this.filterProperties(p)
    );
    this.onSubmit();
  }

  filterProperties(property: string): boolean {
    return this.stateSrv.filterProperties(this.dataType, property);
  }

  onSubmit(): void {
    console.log(this.selectedValues);
  }

  handleSelected(selected: string, property: string): void {
    this.selectedValues = { ...this.selectedValues, [property]: selected };
  }
}
