import { Component } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { MenuOption } from '../../core/model/menu-option';

import { FooterComponent } from '../shared/footer/footer.component';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'jessie-home',
  standalone: true,
  imports: [MenuComponent,FooterComponent],
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
    <jessie-footer />
  `,
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  menuOptions: MenuOption[] = [];

  constructor(private stateSrv: StateService) {
    this.menuOptions = this.stateSrv.setRoutes();
  }
}
