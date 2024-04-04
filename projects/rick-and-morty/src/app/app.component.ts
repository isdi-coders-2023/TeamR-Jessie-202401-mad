import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'jessie-root',
  standalone: true,
  template: `
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent {}
