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
    <div class="min-h-screen bg-[url('https://images.pexels.com/photos/141631/pexels-photo-141631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
      <div class="container mx-auto px-4 py-16 text-center">
        <h1 class="text-5xl font-bold text-yellow-500 mb-8 font-serif shadow-lg">
          Bienvenue à Poudlard
        </h1>
        <p class="text-white text-xl mb-8 max-w-2xl mx-auto bg-black bg-opacity-50 p-4 rounded">
          Découvrez l'univers magique de Harry Potter et rencontrez les personnages emblématiques qui ont marqué cette saga légendaire.
        </p>
        <a
          routerLink="/products-list"
          class="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-serif text-lg"
        >
          Découvrir les personnages
        </a>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
    .font-serif {
      font-family: 'Playfair Display', serif;
    }
  `],
})
export class HeaderComponent {}
