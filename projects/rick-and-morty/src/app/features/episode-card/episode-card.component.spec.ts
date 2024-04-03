import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeCardComponent } from './episode-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { Episode } from '../../core/model/model';

describe('EpisodeCardComponent', () => {
  let component: EpisodeCardComponent;
  let fixture: ComponentFixture<EpisodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeCardComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeCardComponent);
    component = fixture.componentInstance;
    component.episodeInfo = {} as Episode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the requested dato air date', () => {
    const episodeAirdateDe = fixture.debugElement.query(
      By.css('.episode-airDate')
    );
    const episodeAirdateEl = episodeAirdateDe.nativeElement;

    const mockEpisode: Episode = {
      id: 234,
      name: 'primerEpisode',
      air_date: 'march',
      episode: '3',
    };

    component.episodeInfo = mockEpisode;
    fixture.detectChanges();

    expect(episodeAirdateEl.textContent).toContain(mockEpisode.air_date);
  });
});
