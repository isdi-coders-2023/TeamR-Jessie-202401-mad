import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FilterFormComponent } from './filter-form.component';
import { StateService } from '../../../core/services/state.service';

describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;
  let stateServiceMock: jasmine.SpyObj<StateService>;

  beforeEach(async () => {
    stateServiceMock = jasmine.createSpyObj('StateService', [
      'filterProperties',
    ]);

    await TestBed.configureTestingModule({
      imports: [FilterFormComponent, FormsModule],
      providers: [{ provide: StateService, useValue: stateServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter properties correctly on ngOnChanges', () => {
    component.dataType = 'character';
    component.properties = ['name', 'status', 'species'];

    stateServiceMock.filterProperties.and.returnValue(true);

    component.ngOnChanges();

    expect(component.filteredProperties).toEqual(component.properties);
  });

  it('should filter properties correctly on ngOnChanges with invalid properties', () => {
    component.dataType = 'character';
    component.properties = ['name', 'status', 'species'];

    stateServiceMock.filterProperties.and.returnValues(true, false, false);

    component.ngOnChanges();

    expect(component.filteredProperties).toEqual(['name']);
  });

  it('should emit filterValuesChange event on onSubmit', () => {
    const filterValues = { name: 'Rick', status: 'Alive' };

    component.filteredValues = filterValues;

    const emitterSpy = spyOn(component.filterValuesChange, 'emit');

    component.onSubmit();

    expect(emitterSpy).toHaveBeenCalledWith(filterValues);
  });

  it('should update filteredValues on onFilteredValueChanged', () => {
    const propertyName = 'name';
    const propertyValue = 'Rick';

    component.onFilteredValueChanged(propertyValue, propertyName);

    expect(component.filteredValues[propertyName]).toEqual(propertyValue);
  });
});
