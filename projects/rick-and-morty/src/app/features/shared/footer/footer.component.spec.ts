import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the logo image', () => {
    const footerLogoEd = fixture.nativeElement;
    const footerLogoImageEl = footerLogoEd.querySelector('.logo-footer img');
    expect(footerLogoImageEl).toBeTruthy();
    expect(footerLogoImageEl.src).toContain('logo-footer.svg');
  });

  it('should contain links with correct names', () => {
    const footerNamesEd = fixture.nativeElement;
    const footerNamesEl = footerNamesEd.querySelectorAll('.team-footer a');
    expect(footerNamesEl.length).toBe(3);
    expect(footerNamesEl[0].textContent.trim()).toBe('Angelo');
    expect(footerNamesEl[1].textContent.trim()).toBe('Diego');
    expect(footerNamesEl[2].textContent.trim()).toBe('Kevin');
  });
});
