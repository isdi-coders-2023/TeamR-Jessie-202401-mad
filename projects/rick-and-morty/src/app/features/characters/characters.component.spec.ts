import { ComponentFixture, TestBed } from '@angular/core/testing';

import CharactersComponent from './characters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { StateService } from '../../core/services/state.service';
import { of } from 'rxjs';
import { Character } from '../../core/model/model';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersComponent, HttpClientTestingModule],
      providers: [provideRouter([]), StateService],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    stateService = TestBed.inject(StateService);
    spyOn(stateService, 'getAnyData').and.returnValue(of([]));
    spyOn(stateService, 'getFilteredCharacterData').and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call state service with correct parameter in ngOnInit', () => {
    (stateService.getAnyData as jasmine.Spy).and.returnValue(of([]));

    component.ngOnInit();

    expect(stateService.getAnyData).toHaveBeenCalledWith('character');
  });

  it('should update characterList and characterProperties correctly in ngOnInit', () => {
    const characters = [
      {
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
      },
      {
        status: 'Dead',
        species: 'Alien',
        gender: 'Male',
      },
    ] as Character[];
    (stateService.getAnyData as jasmine.Spy).and.returnValue(of(characters));

    component.ngOnInit();

    expect(component.characterList).toEqual(characters);
    if (characters.length > 0) {
      expect(component.characterProperties).toEqual(Object.keys(characters[0]));
    } else {
      expect(component.characterProperties).toEqual([]);
    }
  });

  it('should call state service with correct filtered values', () => {
    const filteredValues = {};
    (stateService.getFilteredCharacterData as jasmine.Spy).and.returnValue(
      of([])
    );

    component.onFilterValuesChange(filteredValues);

    expect(stateService.getFilteredCharacterData).toHaveBeenCalledWith(
      filteredValues
    );
  });

  it('should update filteredValues and characterList correctly', () => {
    const filteredValues = {
      status: 'Alive',
      species: 'Humanoid',
      gender: 'Female',
    };
    const characters = [
      {
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
      },
      {
        status: 'Dead',
        species: 'Alien',
        gender: 'Male',
      },
    ] as Character[];
    (stateService.getFilteredCharacterData as jasmine.Spy).and.returnValue(
      of(characters)
    );

    component.onFilterValuesChange(filteredValues);

    expect(component.filteredValues).toEqual(filteredValues);
    expect(component.characterList).toEqual(characters);
  });

  it('should handle empty characterList correctly', () => {
    const filteredValues = {
      status: 'Alive',
      species: 'Humanoid',
      gender: 'Female',
    };
    (stateService.getFilteredCharacterData as jasmine.Spy).and.returnValue(
      of([])
    );

    component.onFilterValuesChange(filteredValues);

    expect(component.filteredValues).toEqual(filteredValues);
    expect(component.characterList).toEqual([]);
  });
});
