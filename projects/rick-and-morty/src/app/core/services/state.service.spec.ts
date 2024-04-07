import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrivateApiRepoService } from './private-api-repo.service';
import { Character } from '../model/model';
import { BehaviorSubject, of } from 'rxjs';
import { PublicApiRepoService } from './public-api-repo.service';
import { routes } from '../../app.routes';

describe('StateService', () => {
  let stateService: StateService;
  let publicApiServiceSpy: jasmine.SpyObj<PublicApiRepoService>;
  let privateApiRepoServiceSpy: jasmine.SpyObj<PrivateApiRepoService>;

  beforeEach(() => {
    const publicSpy = jasmine.createSpyObj('PublicApiRepoService', [
      'getData',
      'getFilteredCharacterData',
    ]);
    const privateSpy = jasmine.createSpyObj('PrivateApiRepoService', [
      'createCharacter',
      'getPrivateData',
      'deleteCharacter',
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StateService,
        { provide: PublicApiRepoService, useValue: publicSpy },
        { provide: PrivateApiRepoService, useValue: privateSpy },
      ],
    });

    stateService = TestBed.inject(StateService);
    publicApiServiceSpy = TestBed.inject(
      PublicApiRepoService
    ) as jasmine.SpyObj<PublicApiRepoService>;
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

  it('should fetch filtered character data', () => {
    const testData: Character[] = [{ id: 1, name: 'Test Data' }] as Character[];
    publicApiServiceSpy.getFilteredCharacterData.and.returnValue(
      of({
        info: { count: 2, pages: 2, next: 'url', prev: null },
        results: testData,
      })
    );
    stateService.fetchFilteredCharacterData('alive', 'human', 'male');
    expect(publicApiServiceSpy.getFilteredCharacterData).toHaveBeenCalledWith(
      'alive',
      'human',
      'male'
    );
    stateService
      .getFilteredCharacterData({
        status: 'alive',
        species: 'human',
        gender: 'male',
      })
      .subscribe((data) => {
        expect(data).toEqual(testData);
      });
  });

  it('should not call any method when page is 1 in previousData', () => {
    publicApiServiceSpy.page = 1;
    stateService.previousData('character', {});

    expect(publicApiServiceSpy.getFilteredCharacterData).not.toHaveBeenCalled();
    expect(publicApiServiceSpy.getData).not.toHaveBeenCalled();
  });

  it('should handle next data if datatype is character', () => {
    const testData: Character[] = [{ id: 1, name: 'Test Data' }] as Character[];
    publicApiServiceSpy.getFilteredCharacterData.and.returnValue(
      of({
        info: { count: 2, pages: 2, next: 'url', prev: null },
        results: testData,
      })
    );
    publicApiServiceSpy.page = 1;
    stateService.nextData('character', {
      status: 'alive',
      species: 'human',
      gender: 'male',
    });
    expect(publicApiServiceSpy.page).toBe(2);
    expect(publicApiServiceSpy.getFilteredCharacterData).toHaveBeenCalledWith(
      'alive',
      'human',
      'male'
    );
  });

  it('should handle previous data if datatype is character', () => {
    const testData: Character[] = [{ id: 1, name: 'Test Data' }] as Character[];
    publicApiServiceSpy.getFilteredCharacterData.and.returnValue(
      of({
        info: { count: 2, pages: 2, next: 'url', prev: null },
        results: testData,
      })
    );
    publicApiServiceSpy.page = 2;
    stateService.previousData('character', {
      status: 'alive',
      species: 'human',
      gender: 'male',
    });
    expect(publicApiServiceSpy.page).toBe(1);
    expect(publicApiServiceSpy.getFilteredCharacterData).toHaveBeenCalledWith(
      'alive',
      'human',
      'male'
    );
  });

  it('should not change page for previous data when current page is 1', () => {
    publicApiServiceSpy.page = 1;
    stateService.previousData('character', {
      status: 'alive',
      species: 'human',
      gender: 'male',
    });
    expect(publicApiServiceSpy.page).toBe(1);
    expect(publicApiServiceSpy.getFilteredCharacterData).not.toHaveBeenCalled();
  });

  it('should delete character', () => {
    const testData: Character[] = [{ id: 1, name: 'Test Data' }] as Character[];
    privateApiRepoServiceSpy.deleteCharacter.and.returnValue(
      of([] as unknown as Character)
    );
    privateApiRepoServiceSpy.getPrivateData.and.returnValue(of(testData));
    stateService.deleteCharacter(1);
    expect(privateApiRepoServiceSpy.deleteCharacter).toHaveBeenCalledWith(1);
    expect(privateApiRepoServiceSpy.getPrivateData).toHaveBeenCalled();
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

  it('should set routes', () => {
    const expectedRoutes = routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
    const result = stateService.setRoutes();
    expect(result).toEqual(expectedRoutes);
  });

  it('should filter properties', () => {
    expect(stateService.filterProperties('character', 'status')).toBeTrue();
    expect(stateService.filterProperties('character', 'species')).toBeTrue();
    expect(stateService.filterProperties('character', 'gender')).toBeTrue();
    expect(
      stateService.filterProperties('unknownDataType', 'unknownProperty')
    ).toBeFalse();
  });

  it('should filter property options', () => {
    expect(stateService.filterPropertyOptions('character', 'status')).toEqual([
      'Alive',
      'Dead',
      'unknown',
    ]);
    expect(stateService.filterPropertyOptions('character', 'species')).toEqual([
      'Human',
      'Humanoid',
      'Animal',
      'Alien',
      'Disease',
      'Mythological Creature',
      'Robot',
      'unknown',
    ]);
    expect(stateService.filterPropertyOptions('character', 'gender')).toEqual([
      'Male',
      'Female',
      'unknown',
    ]);
    expect(
      stateService.filterPropertyOptions('unknownDataType', 'unknownProperty')
    ).toEqual(['unknown']);
  });

  it('should handle next data for unknown data type', () => {
    const filters = { status: 'alive', species: 'human', gender: 'male' };
    const testData: Character[] = [{ id: 1, name: 'Test Data' }] as Character[];
    publicApiServiceSpy.page = 1;
    publicApiServiceSpy.getFilteredCharacterData.and.returnValue(
      of({
        info: { count: 2, pages: 2, next: 'url', prev: null },
        results: testData,
      })
    );
    stateService.nextData('unknown', filters);
    expect(publicApiServiceSpy.page).toBe(1);
    expect(publicApiServiceSpy.getFilteredCharacterData).not.toHaveBeenCalled();
  });

  it('should handle previous data for unknown data type', () => {
    const filters = { status: 'alive', species: 'human', gender: 'male' };
    const testData: Character[] = [{ id: 1, name: 'Test Data' }] as Character[];
    publicApiServiceSpy.page = 1;
    publicApiServiceSpy.getFilteredCharacterData.and.returnValue(
      of({
        info: { count: 2, pages: 2, next: 'url', prev: null },
        results: testData,
      })
    );
    stateService.previousData('unknown', filters);
    expect(publicApiServiceSpy.page).toBe(1);
    expect(publicApiServiceSpy.getFilteredCharacterData).not.toHaveBeenCalled();
  });

  it('should filter properties for unknown data type', () => {
    expect(
      stateService.filterProperties('unknownDataType', 'unknownProperty')
    ).toBeFalse();
  });

  it('should filter property options for unknown data type', () => {
    expect(
      stateService.filterPropertyOptions('unknownDataType', 'unknownProperty')
    ).toEqual(['unknown']);
  });
});
