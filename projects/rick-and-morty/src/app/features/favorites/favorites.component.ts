import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'jessie-favorites',
  standalone: true,
  imports: [HeaderComponent],
  template: ` <jessie-header /> `,
  styleUrl: './favorites.component.css',
})
export default class FavoritesComponent {}
