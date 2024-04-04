import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuOption } from '../../../core/model/menu-option';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const mockMenuOptions: MenuOption[] = [
    { title: 'Characters', path: '/characters' },
    { title: 'Episodes', path: '/episodes' },
    { title: 'Locations', path: '/locations' },
    { title: 'Favorites', path: '/favorites' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, HttpClientTestingModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu visibility on click', () => {
    expect(component.menuVisible).toBeFalsy();

    const icon = fixture.nativeElement.querySelector('.ham-menu');
    icon.click();
    fixture.detectChanges();

    expect(component.menuVisible).toBeTruthy();

    icon.click();
    fixture.detectChanges();

    expect(component.menuVisible).toBeFalsy();
  });

  it('should display correct menu options', () => {
    const menu = fixture.nativeElement.querySelector('.header-menu');
    const menuItems = menu.querySelectorAll('li');

    expect(menuItems.length).toBe(mockMenuOptions.length);

    menuItems.forEach((menuItem: HTMLElement, index: number) => {
      expect(menuItem.textContent?.trim()).toBe(mockMenuOptions[index].title);
    });
  });

  it('should toggle menu visibility on Enter key press', () => {
    expect(component.menuVisible).toBeFalsy();

    const icon = fixture.nativeElement.querySelector('.ham-menu');
    icon.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    fixture.detectChanges();

    expect(component.menuVisible).toBeTruthy();
  });
});
