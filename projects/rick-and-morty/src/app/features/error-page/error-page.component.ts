import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
    selector: 'jessie-error-page',
    standalone: true,
    template: ` 
  <jessie-header />
    <section>
      <div class="error-img">
        <img  src="./assets/img/error.png" alt="error img" />
      </div>
      <div>
        <div class="error-message">
          <h2>ERROR</h2>
          <p>We Couldn't find the page you were looking for</p>
        </div>
        <div class="error-button">
          <img (click)="goBack()" src="./assets/img/img-go-back.png" alt="img btn back"  />
          <button (click)="goBack()">GO BACK</button>
        </div>
      </div>
    </section>
  <jessie-footer />`,
    styleUrl: './error-page.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export default class ErrorPageComponent {
  goBack() {
    window.location.href = 'index.html';
}
}
