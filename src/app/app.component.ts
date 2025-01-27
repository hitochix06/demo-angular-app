import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Bienvenue</h1>
    <nav>
      <a routerLink="/Home"></a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Personnages de Harry Potter';
}
