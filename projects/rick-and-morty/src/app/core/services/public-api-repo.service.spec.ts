import { TestBed } from '@angular/core/testing';

import { PublicApiRepoService } from './public-api-repo.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Character } from '../model/model';

describe('ApiRepoService', () => {
  let service: PublicApiRepoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PublicApiRepoService],
    });
    service = TestBed.inject(PublicApiRepoService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should construct correct URL for getData', () => {
    const urlBase = 'https://rickandmortyapi.com/api';
    const dataType = 'characters';
    const expectedUrl = `${urlBase}/${dataType}?page=${service.page}`;

    service.getData(dataType).subscribe();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
  });

  it('should fetch filtered character data based on status, species, and gender', () => {
    const urlBase = 'https://rickandmortyapi.com/api';
    const status = 'Alive';
    const species = 'Human';
    const gender = 'Female';
    const mockCharacterList = {
      results: [
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
      ] as Character[],
    };
    const expectedUrl = `${urlBase}/character?page=${service.page}&status=${status}&species=${species}&gender=${gender}`;

    service
      .getFilteredCharacterData(status, species, gender)
      .subscribe((characters) => {
        expect(characters).toBeTruthy();
        expect(characters.results.length).toBeGreaterThan(0); // Assuming characters are returned
      });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacterList);
  });

  it('should fetch filtered character data based on status only when other parameters are not provided', () => {
    const urlBase = 'https://rickandmortyapi.com/api';
    const status = 'alive';
    const mockCharacterList = {
      results: [
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
      ] as Character[],
    };

    service.getFilteredCharacterData(status).subscribe((characters) => {
      expect(characters).toBeTruthy();
      expect(characters.results.length).toBeGreaterThan(0); // Assuming characters are returned
    });

    const req = httpMock.expectOne(
      `${urlBase}/character?page=${service.page}&status=${status}&species=&gender=`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacterList);
  });

  it('should fetch filtered character data unfiltered when no parameters are provided', () => {
    const urlBase = 'https://rickandmortyapi.com/api';
    const mockCharacterList = {
      results: [
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
      ] as Character[],
    };

    service.getFilteredCharacterData().subscribe((characters) => {
      expect(characters).toBeTruthy();
      expect(characters.results.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne(
      `${urlBase}/character?page=${service.page}&status=&species=&gender=`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacterList);
  });
});
