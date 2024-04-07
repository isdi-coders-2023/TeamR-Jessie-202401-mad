import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ScrollTopComponent } from './scroll-top.component';

describe('ScrollTopComponent', () => {
  let component: ScrollTopComponent;
  let fixture: ComponentFixture<ScrollTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to top on click', fakeAsync(() => {
    spyOn(window, 'scrollTo');
    const button = fixture.nativeElement.querySelector('.go-top');

    button.click();
    tick();

    expect(window.scrollTo).toHaveBeenCalled;
  }));

  it('should scroll to top on keyup event', fakeAsync(() => {
    spyOn(window, 'scrollTo');
    const button = fixture.nativeElement.querySelector('.go-top');

    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    button.dispatchEvent(event);
    tick();

    expect(window.scrollTo).toHaveBeenCalled;
  }));
});
