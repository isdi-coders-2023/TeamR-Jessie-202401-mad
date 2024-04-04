import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { StateService } from '../../../core/services/state.service';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  const mockServ = jasmine.createSpyObj('StateService', ['nextData', 'previousData']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PaginationComponent],
      providers: [{ provide: StateService, useValue: mockServ }],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call a previous page when click', () => {
    spyOn(component, 'prevPage');
    const button = fixture.debugElement.queryAll(By.css('button'));
    button[0].triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.prevPage).toHaveBeenCalled();
  });
  it('should call a next page when click', () => {
    spyOn(component, 'nextPage');
    const button = fixture.debugElement.queryAll(By.css('button'));
    button[1].triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.nextPage).toHaveBeenCalled();
  });

  it('should show us to previous data page when click', () => {
    const fakeData = 'previousData';
    mockServ.previousData.and.returnValue(fakeData);

    const button = fixture.debugElement.queryAll(By.css('button'));
    button[0].triggerEventHandler('click');

    expect(mockServ.previousData).toHaveBeenCalled;
    expect(mockServ.previousData()).toBe(fakeData);
  });

  it('should show us to next data page when click', () => {
    const fakeData = 'nextData';
    mockServ.nextData.and.returnValue(fakeData);

    const button = fixture.debugElement.queryAll(By.css('button'));
    button[1].triggerEventHandler('click');

    expect(mockServ.nextData).toHaveBeenCalled;
    expect(mockServ.nextData()).toBe(fakeData);
  });
});
