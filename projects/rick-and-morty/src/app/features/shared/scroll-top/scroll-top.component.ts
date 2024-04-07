import { Component } from '@angular/core';

@Component({
  selector: 'jessie-scroll-top',
  standalone: true,
  imports: [],
  template: `
    <a
      class="go-top"
      tabindex="0"
      (click)="scrollToTop()"
      (keyup)="scrollToTop()"
    >
      <i class="fa-solid fa-circle-arrow-up"></i>
      <img src="../../../assets/img/portal.png" alt="Portal" width="250" />
    </a>
  `,
  styleUrl: './scroll-top.component.css',
})
export class ScrollTopComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
