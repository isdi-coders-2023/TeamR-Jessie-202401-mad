import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from '../../../core/model/menu-option';

@Component({
  selector: 'jessie-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of items; track $index) { @if (item.path !== 'home') {
        <li>
          <a [routerLink]="'/' + item.path" routerLinkActive="active">{{
            item.title
          }}</a>
        </li>
        } }
      </ul>
    </nav>
  `,
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input({
    required: true,
  })
  items: MenuOption[] = [];
}
