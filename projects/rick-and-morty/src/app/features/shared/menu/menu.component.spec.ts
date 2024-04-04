import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: of({})
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show us a menu items', () => {
    component.items = [
      {path: 'info', title: 'Info'},
      {path: 'favorites', title: 'Favorites'},
    ]
    fixture.detectChanges();

    const navElement = fixture.debugElement.nativeElement.querySelector('nav');
    const listItems = navElement.querySelectorAll('li');

    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toContain('Info');
    expect(listItems[1].textContent).toContain('Favorites');
  });

  it('should show us a routerLink correctly', () => {
    component.items = [{ path: 'info', title: 'Info' }];

    fixture.detectChanges();

    const linkElement = fixture.debugElement.nativeElement.querySelector('a');

    expect(linkElement.getAttribute('ng-reflect-router-link')).toBe('/info');
  });
})
