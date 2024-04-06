import { Component } from '@angular/core';

@Component({
  selector: 'jessie-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="logo-footer">
        <img src="./assets/img/logo-footer.svg" alt="Footer logo" width="150" />
      </div>
      <div>
        <span class="team-footer">
          <h2>MADE BY:</h2>
          <p>
            <a href="##">Angelo </a> / <a href="##"> Diego </a>/<a href="##">
              Kevin
            </a>
          </p>
          <p></p>
        </span>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
