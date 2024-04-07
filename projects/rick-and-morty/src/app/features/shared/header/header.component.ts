import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuOption } from '../../../core/model/menu-option';
import { StateService } from '../../../core/services/state.service';

@Component({
  selector: 'jessie-header',
  standalone: true,
  template: `
    <header>
      <nav class="header-nav">
        <a href="index.html"
          ><img src="../favicon.svg" alt="Home logo" width="75"
        /></a>
        <jessie-menu [items]="menuOptions" class="header-menu desktop" />
        @if (menuVisible) {
        <jessie-menu [items]="menuOptions" class="header-menu mobile" />
        }
        <i
          class="fa-solid fa-bars ham-menu"
          tabindex="-1"
          style="color: #48e117;"
          (click)="menuVisible ? (menuVisible = false) : (menuVisible = true)"
          (keyup.enter)="
            menuVisible ? (menuVisible = false) : (menuVisible = true)
          "
        ></i>
        @if (menuVisible) {
        <i
          class="fa-solid fa-xmark close-btn"
          tabindex="-1"
          (click)="menuVisible ? (menuVisible = false) : (menuVisible = true)"
          (keyup.enter)="
            menuVisible ? (menuVisible = false) : (menuVisible = true)
          "
        ></i>
        }
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
  imports: [MenuComponent, RouterModule],
})
export class HeaderComponent {
  menuOptions: MenuOption[] = [];
  menuVisible: boolean = false;

  constructor(private stateSrv: StateService) {
    this.menuOptions = this.stateSrv.setRoutes();
  }
}
