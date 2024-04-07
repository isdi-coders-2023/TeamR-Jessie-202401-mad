import { Component } from '@angular/core';

@Component({
  selector: 'jessie-searchbar',
  standalone: true,
  imports: [],
  template: `
    <div class="search">
      <input
        type="text"
        class="search-bar"
        placeholder="Looking for someone?"
      />
      <button type="submit" class="search-btn" aria-label="search-btn">
        <i class="fa fa-search"></i>
      </button>
    </div>
  `,
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {}
