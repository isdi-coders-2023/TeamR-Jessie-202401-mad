import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesListComponent } from './episodes-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EpisodesListComponent', () => {
  let component: EpisodesListComponent;
  let fixture: ComponentFixture<EpisodesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodesListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
