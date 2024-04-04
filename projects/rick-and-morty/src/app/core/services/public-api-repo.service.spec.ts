import { TestBed } from '@angular/core/testing';

import { PublicApiRepoService } from './public-api-repo.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

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
    const dataType = 'characters';
    const expectedUrl = `https://rickandmortyapi.com/api/${dataType}?page=${service.page}`;

    service.getData(dataType).subscribe();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
  });
});
