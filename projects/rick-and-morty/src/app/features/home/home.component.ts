import { Component } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { routes } from '../../app.routes';
import { MenuOption } from '../../core/model/menu-option';

@Component({
  selector: 'jessie-home',
  standalone: true,
  imports: [MenuComponent],
  template: `
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
    <section class="home-section">
      <jessie-menu [items]="menuOptions" />
    </section>
  `,
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  menuOptions: MenuOption[] = [];

  constructor() {
    this.menuOptions = routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
