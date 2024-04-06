import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PrivateApiRepoService } from './private-api-repo.service';
import { Character } from '../model/model';

describe('PrivateApiRepoService', () => {
  let service: PrivateApiRepoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrivateApiRepoService],
    });
    service = TestBed.inject(PrivateApiRepoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch private data from API', () => {
    const testData: Character[] = [
      { id: 1, name: 'Test Character' },
    ] as Character[];
    service.getPrivateData().subscribe((data) => {
      expect(data).toEqual(testData);
    });
    const req = httpMock.expectOne('http://localhost:3000/favorites');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should fetch character by ID from API', () => {
    const testId = 1;
    const testData: Character = { id: 1, name: 'Test Character' } as Character;
    service.getCharacterById(testId).subscribe((data) => {
      expect(data).toEqual(testData);
    });
    const req = httpMock.expectOne(`http://localhost:3000/favorites/${testId}`);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should update character via API', () => {
    const testCharacter: Character = {
      id: 1,
      name: 'Updated Character',
    } as Character;
    service.updateCharacter(testCharacter).subscribe((data) => {
      expect(data).toEqual(testCharacter);
    });
    const req = httpMock.expectOne(
      `http://localhost:3000/favorites/${testCharacter.id}`
    );
    expect(req.request.method).toBe('PATCH');
    req.flush(testCharacter);
  });

  it('should create character via API', () => {
    const testCharacter: Character = {
      id: 2,
      name: 'New Character',
    } as Character;
    service.createCharacter(testCharacter).subscribe((data) => {
      expect(data).toEqual(testCharacter);
    });
    const req = httpMock.expectOne('http://localhost:3000/favorites');
    expect(req.request.method).toBe('POST');
    req.flush(testCharacter);
  });

  it('should delete character via API', () => {
    const testId = 1;
    service.deleteCharacter(testId).subscribe();
    const req = httpMock.expectOne(`http://localhost:3000/favorites/${testId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
