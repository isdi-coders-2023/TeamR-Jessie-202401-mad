import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter.component';
import { StateService } from '../../../core/services/state.service';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let stateServiceMock: jasmine.SpyObj<StateService>;

  beforeEach(async () => {
    stateServiceMock = jasmine.createSpyObj('StateService', [
      'filterPropertyOptions',
    ]);

    await TestBed.configureTestingModule({
      imports: [FilterComponent, FormsModule],
      providers: [{ provide: StateService, useValue: stateServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize options correctly on ngOnInit', () => {
    const propertyName = 'status';
    const dataType = 'character';
    const expectedOptions = ['Alive', 'Dead', 'Unknown'];

    component.name = propertyName;
    component.dataType = dataType;

    stateServiceMock.filterPropertyOptions.and.returnValue(expectedOptions);

    component.ngOnInit();

    expect(component.options).toEqual(expectedOptions);
  });

  it('should emit valueChange event on onValueChanged', () => {
    const selectedValue = 'Alive';

    const emitterSpy = spyOn(component.valueChange, 'emit');

    component.selected = selectedValue;

    component.onValueChanged();

    expect(emitterSpy).toHaveBeenCalledWith(selectedValue);
  });
});
