import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Character } from '../../core/model/model';
describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCardComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    component.characterInfo = { location: {} } as Character;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render character information', () => {
    const characterInfo: Character = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: { name: '', url: '' },
      image: 'https://example.com/rick.png',
      location: { name: '', url: 'Earth' },
    };

    component.characterInfo = characterInfo;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.character-name').textContent).toContain(
      'Rick Sanchez'
    );
  });
});
