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

  it('should fetch data from public API', () => {
    const mockData: Any[] = [{ id: 1, name: 'Test' }] as unknown as any;
    mockPublicApiRepoService.getData.and.returnValue(of({ results: mockData }));

    service.fetchData('dataType');

    service.getAnyData('dataType').subscribe(data => {
      expect(data).toEqual(mockData);
    });
  });

  it('should fetch private data', () => {
    const mockPrivateData: Character[] = [{ id: 1, name: 'Test Character' }] as any;
    mockPrivateApiRepoService.getPrivateData.and.returnValue(of(mockPrivateData));

    service.fetchPrivateData();

    service.getPrivateData().subscribe(data => {
      expect(data).toEqual(mockPrivateData);
    });
  });

  it('should navigate to next data page', () => {
    mockPublicApiRepoService.page = 1;
    const mockData: Any[] = [{ id: 1, name: 'Test' }] as any;
    mockPublicApiRepoService.getData.and.returnValue(of({ results: mockData }));

    service.nextData('dataType');

    service.getAnyData('dataType').subscribe(data => {
      expect(data).toEqual(mockData);
    });
    expect(mockPublicApiRepoService.page).toBe(2);
  });

  it('should navigate to previous data page', () => {
    mockPublicApiRepoService.page = 2;
    const mockData: Any[] = [{ id: 1, name: 'Test' }] as any;
    mockPublicApiRepoService.getData.and.returnValue(of({ results: mockData }));

    service.previousData('dataType');

    service.getAnyData('dataType').subscribe(data => {
      expect(data).toEqual(mockData);
    });
    expect(mockPublicApiRepoService.page).toBe(1);
  });

  it('should delete character', () => {
    mockPrivateApiRepoService.deleteCharacterUrl.and.returnValue(of(null));
    const mockPrivateData: Character[] = [{ id: 1, name: 'Test Character' }] as any;
    mockPrivateApiRepoService.getPrivateData.and.returnValue(of(mockPrivateData));

    service.deleteCharacter(1);

    service.getPrivateData().subscribe(data => {
      expect(data).toEqual(mockPrivateData);
    });
  });

  it('should set routes', () => {
    const mockRoutes = [
      { path: 'path1', title: 'Title1' },
      { path: 'path2', title: 'Title2' }
    ];
    spyOnProperty(routes, 'length', 'get').and.returnValue(mockRoutes.length);

    const result = service.setRoutes();

    expect(result).toEqual(mockRoutes);
  });
});
