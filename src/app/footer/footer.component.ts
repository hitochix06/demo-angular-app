import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-800 text-white p-6">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h3 class="text-xl font-bold">Mon Application</h3>
            <p class="text-gray-400">© 2024 Tous droits réservés</p>
          </div>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-gray-300">À propos</a>
            <a href="#" class="hover:text-gray-300">Contact</a>
            <a href="#" class="hover:text-gray-300">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
}
