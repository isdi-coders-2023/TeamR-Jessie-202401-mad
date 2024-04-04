import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { Character } from '../../core/model/model';
import { StateService } from '../../core/services/state.service';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let stateServiceSpy: jasmine.SpyObj<StateService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('StateService', [
      'deleteCharacter',
      'addFavorite',
    ]);

    TestBed.configureTestingModule({
      imports: [CharacterListComponent],
      providers: [{ provide: StateService, useValue: spy }],
    }).compileComponents();

    stateServiceSpy = TestBed.inject(
      StateService
    ) as jasmine.SpyObj<StateService>;

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render characters correctly', () => {
    const characters: Character[] = [
      { id: 1, name: 'Character 1', favorite: false },
      { id: 2, name: 'Character 2', favorite: true },
    ] as Character[];
    component.characterList = characters;
    fixture.detectChanges();
    const characterElements =
      fixture.nativeElement.querySelectorAll('.character-card');
    expect(characterElements.length).toBe(characters.length);
  });

  // it('should display delete button if isCharacterPriv is true', () => {
  //   component.isCharacterPriv = true;
  //   fixture.detectChanges();
  //   const deleteButton = fixture.debugElement.query(
  //     By.css('.close-btn')
  //   ).nativeElement;
  //   expect(deleteButton).toBeNull();

  //   // component.isCharacterPriv = true;
  //   // fixture.detectChanges();
  //   // const deleteButton = fixture.nativeElement.querySelector('.close-btn');
  //   // expect(deleteButton).toBeTruthy();
  // });

  // it('should display favorite button if isCharacterPriv is false', () => {
  //   component.isCharacterPriv = false;
  //   fixture.detectChanges();
  //   const favoriteButton = fixture.nativeElement.querySelector('.favorite-btn');
  //   expect(favoriteButton).toBeTruthy();
  // });

  // it('should call deleteCharacter method with correct character ID', () => {
  //   const characterId = 1;
  //   const characters: Character[] = [
  //     { id: characterId, name: 'Test Character', favorite: false },
  //   ] as Character[];
  //   component.characterList = characters;
  //   fixture.detectChanges();
  //   const deleteButton = fixture.nativeElement.querySelector('.close-btn');
  //   deleteButton.click();
  //   expect(stateServiceSpy.deleteCharacter).toHaveBeenCalledWith(characterId);
  // });

  it('should call addFavorite method with correct character object', () => {
    const character: Character = {
      id: 1,
      name: 'Test Character',
      favorite: false,
    } as Character;
    component.characterList = [character];
    fixture.detectChanges();
    const favoriteButton = fixture.nativeElement.querySelector('.favorite-btn');
    favoriteButton.click();
    expect(stateServiceSpy.addFavorite).toHaveBeenCalledWith(character);
  });

  it('should not call addFavorite method if character is already a favorite', () => {
    const character: Character = {
      id: 1,
      name: 'Test Character',
      favorite: true,
    } as Character;
    component.characterList = [character];
    fixture.detectChanges();
    const favoriteButton = fixture.nativeElement.querySelector('.favorite-btn');
    favoriteButton.click();
    expect(stateServiceSpy.addFavorite).not.toHaveBeenCalled();
  });
});
