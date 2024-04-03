import { Component } from '@angular/core';

@Component({
  selector: 'jessie-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="logo-footer">
        <img src="./assets/logo-footer.svg" alt="Footer logo" />
      </div>
      <div>
        <span class="team-footer">
          <h5>MADE BY:</h5>
          <p>
            <a href="##">Angelo </a> / <a href="##"> Diego </a>/<a href="##">
              Kevin
            </a>
          </p>
        </span>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
