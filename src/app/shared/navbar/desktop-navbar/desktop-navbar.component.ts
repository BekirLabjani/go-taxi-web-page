import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-desktop-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop-navbar.component.html',
  styleUrl: './desktop-navbar.component.scss'
})
export class DesktopNavbarComponent {
    isOpen = false; // Zustand für Dropdown

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
  // Klicks überall auf der Seite abfangen
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Wenn der Klick nicht auf dem Button oder im Menü war -> schließen
    if (!target.closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
