import { Component } from '@angular/core';

@Component({
  selector: 'jessie-error-page',
  standalone: true,
  imports: [],
  template: ` <div class="error-message">
    <img src="./assets/img/error.png" alt="error img" />
    <h2>ERROR</h2>
    <p>We Couldn't find the page your were looking for</p>
    <a href="index.html"
      ><img src="./assets/img/img-go-back.png" alt="img btn back" width="100" />
      GO TO BACK</a
    >
  </div>`,
  styleUrl: './error-page.component.css',
})
export default class ErrorPageComponent {}
