import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'Personnages de Harry Potter';
}
