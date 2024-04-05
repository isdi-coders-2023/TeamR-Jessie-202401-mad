import { ComponentFixture, TestBed } from "@angular/core/testing"
import { CharacterListComponent } from "./character-list.component"
import { CharacterCardComponent } from '../character-card/character-card.component';
import { StateService } from '../../core/services/state.service';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let mockServ: jasmine.SpyObj<StateService>;

  beforeEach(() => {
    mockServ = jasmine.createSpyObj<StateService>(['deleteCharacter']);
    TestBed.configureTestingModule({
    imports: [CharacterListComponent, CharacterCardComponent],
    providers: [{ provide: StateService, useValue: mockServ }],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    })

    it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call stateSrv.deleteCharacter with correct id', () => {
      const characterId = 1;
      component.characterList = [];
      component.deleteCharacter(characterId);
      expect(mockServ.deleteCharacter).toHaveBeenCalled();
    });
  })
