import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrivateApiRepoService } from './private-api-repo.service';
import { Character } from '../model/model';
import { BehaviorSubject, of } from 'rxjs';

describe('StateService', () => {
  let stateService: StateService;
  let privateApiRepoServiceSpy: jasmine.SpyObj<PrivateApiRepoService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PrivateApiRepoService', [
      'createCharacter',
      'getPrivateData',
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StateService,
        { provide: PrivateApiRepoService, useValue: spy },
      ],
    });

    stateService = TestBed.inject(StateService);
    privateApiRepoServiceSpy = TestBed.inject(
      PrivateApiRepoService
    ) as jasmine.SpyObj<PrivateApiRepoService>;
  });

  it('should get private data', () => {
    const mockData: Character[] = [
      {
        id: 1,
        name: 'Character 1',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'image1.jpg',
        origin: { name: 'Origin 1', url: 'url1' },
        location: { name: 'Location 1', url: 'url2' },
      },
      {
        id: 2,
        name: 'Character 2',
        status: 'Dead',
        species: 'Alien',
        gender: 'Female',
        image: 'image2.jpg',
        origin: { name: 'Origin 2', url: 'url3' },
        location: { name: 'Location 2', url: 'url4' },
      },
    ];

    privateApiRepoServiceSpy.getPrivateData.and.returnValue(
      new BehaviorSubject<Character[]>(mockData).asObservable()
    );

    stateService.getPrivateData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });
  });

  it('should add a character to favorites', () => {
    const characterToAdd: Character = {
      id: 3,
      name: 'Character 3',
      status: 'Alive',
      species: 'Robot',
      gender: 'Unknown',
      image: 'image3.jpg',
      origin: { name: 'Origin 3', url: 'url5' },
      location: { name: 'Location 3', url: 'url6' },
    };
    const mockData: Character[] = [
      {
        id: 1,
        name: 'Character 1',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'image1.jpg',
        origin: { name: 'Origin 1', url: 'url1' },
        location: { name: 'Location 1', url: 'url2' },
      },
    ];

    privateApiRepoServiceSpy.createCharacter.and.returnValue(
      of(characterToAdd)
    );
    privateApiRepoServiceSpy.getPrivateData.and.returnValue(
      of([...mockData, characterToAdd])
    );

    stateService.addFavorite(characterToAdd);

    stateService.getPrivateData().subscribe((data) => {
      expect(data).toContain(characterToAdd);
    });
  });
});
