import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/shared/footer/footer.component';

@Component({
  selector: 'jessie-root',
  standalone: true,
  template: `
    <main>
      <router-outlet />
    </main>
  `,
  styles: ``,
  imports: [RouterOutlet, FooterComponent],
})
export class AppComponent {}
