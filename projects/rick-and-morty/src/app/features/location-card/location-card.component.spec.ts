import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCardComponent } from './location-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '../../core/model/model';
import { By } from '@angular/platform-browser';

describe('EpisodeCardComponent', () => {
  let component: LocationCardComponent;
  let fixture: ComponentFixture<LocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationCardComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationCardComponent);
    component = fixture.componentInstance;
    component.locationInfo = {} as Location;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the requested dato air date', () => {
    const locationNameDe = fixture.debugElement.query(By.css('.location-name'));
    const locationNameEl = locationNameDe.nativeElement;

    const mockLocation: Location = {
      name: 'Earth',
    } as Location;

    component.locationInfo = mockLocation;
    fixture.detectChanges();

    expect(locationNameEl.textContent).toContain(mockLocation.name);
  });
});
