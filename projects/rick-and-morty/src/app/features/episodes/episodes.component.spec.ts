import { ComponentFixture, TestBed } from '@angular/core/testing';

import EpisodesComponent from './episodes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodesComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
