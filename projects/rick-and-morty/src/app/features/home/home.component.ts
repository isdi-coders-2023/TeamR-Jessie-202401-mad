import { Component } from '@angular/core';

@Component({
  selector: 'jessie-home',
  standalone: true,
  imports: [],
  template: `
    <section class="home-section">
      <header>
        <img
          class="logo"
          src="../../assets/logo.svg"
          alt=""
          Rick
          and
          Morty
          logo
          width="250"
        />
      </header>
    </section>
  `,
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
