import { TestBed } from '@angular/core/testing';

import { PublicApiRepoService } from './public-api-repo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiRepoService', () => {
  let service: PublicApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(PublicApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
