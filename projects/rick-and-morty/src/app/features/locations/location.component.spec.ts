import { ComponentFixture, TestBed } from '@angular/core/testing';
import LocationComponent from './location.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LocationsComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
