import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { RouterModule } from '@angular/router';
import { MenuOption } from '../../../core/model/menu-option';
import { routes } from '../../../app.routes';


@Component({
    selector: 'jessie-header',
    standalone: true,
    template: `
    <header>
    <div class="logo-header">
      <img src="../favicon.svg" alt="">
    </div>
    <div class="menu-header">
    <jessie-menu [items]="menuOptions"/>
    </div>
    </header>

  `,
    styleUrl: './header.component.css',
    imports: [MenuComponent, RouterModule]
})
export class HeaderComponent {

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
