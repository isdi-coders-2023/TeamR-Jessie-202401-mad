import { TestBed } from '@angular/core/testing';

import { ApiRepoService } from './api-repo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiRepoService', () => {
  let service: ApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
