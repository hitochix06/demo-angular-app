import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-gray-900 p-4 border-b-2 border-yellow-600">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-yellow-500 font-bold text-2xl font-serif">Poudlard Express</div>
        <div class="flex space-x-6">
          <a routerLink="/" class="text-yellow-500 hover:text-yellow-300 transition-colors font-serif">Accueil</a>
          <a routerLink="/products-list" class="text-yellow-500 hover:text-yellow-300 transition-colors font-serif">Personnages</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
    .font-serif {
      font-family: 'Playfair Display', serif;
    }
  `]
})
export class HeaderComponent {}
