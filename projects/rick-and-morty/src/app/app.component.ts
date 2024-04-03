import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./features/shared/footer/footer.component";

@Component({
    selector: 'jessie-root',
    standalone: true,
    template: `
      <router-outlet />
  `,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent]
})
export class AppComponent {
  title = 'rick-and-morty';
}
