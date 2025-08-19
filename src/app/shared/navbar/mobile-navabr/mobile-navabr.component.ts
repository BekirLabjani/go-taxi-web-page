import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-navabr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-navabr.component.html',
  styleUrl: './mobile-navabr.component.scss'
})
export class MobileNavabrComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.toggleBodyScroll(this.isOpen);
  }

  closeMenu() {
    this.isOpen = false;
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(disable: boolean) {
    if (disable) {
      document.body.style.overflow = 'hidden'; // kein Scrollen
    } else {
      document.body.style.overflow = ''; // Standard zurück
    }
  }
}
