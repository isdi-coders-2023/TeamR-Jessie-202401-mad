import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';
import { PublicApiRepoService } from './public-api-repo.service';
import { PrivateApiRepoService } from './private-api-repo.service';
import { of } from 'rxjs';
import { Any, Character } from '../model/model';
import { routes } from '../../app.routes';

describe('StateService', () => {
  let service: StateService;
  let mockPublicApiRepoService: jasmine.SpyObj<PublicApiRepoService>;
  let mockPrivateApiRepoService: jasmine.SpyObj<PrivateApiRepoService>;

  beforeEach(() => {
    const publicApiRepoSpy = jasmine.createSpyObj('PublicApiRepoService', ['getData']);
    const privateApiRepoSpy = jasmine.createSpyObj('PrivateApiRepoService', ['getPrivateData', 'deleteCharacterUrl']);

    TestBed.configureTestingModule({
      providers: [
        StateService,
        { provide: PublicApiRepoService, useValue: publicApiRepoSpy },
        { provide: PrivateApiRepoService, useValue: privateApiRepoSpy }
      ]
    });

    service = TestBed.inject(StateService);
    mockPublicApiRepoService = TestBed.inject(PublicApiRepoService) as jasmine.SpyObj<PublicApiRepoService>;
    mockPrivateApiRepoService = TestBed.inject(PrivateApiRepoService) as jasmine.SpyObj<PrivateApiRepoService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('should fetch private data', () => {
    const mockPrivateData: Character[] = [{ id: 1, name: 'Test Character' }] as any;
    mockPrivateApiRepoService.getPrivateData.and.returnValue(of(mockPrivateData));

    service.fetchPrivateData();

    service.getPrivateData().subscribe(data => {
      expect(data).toEqual(mockPrivateData);
    });
  });
})
