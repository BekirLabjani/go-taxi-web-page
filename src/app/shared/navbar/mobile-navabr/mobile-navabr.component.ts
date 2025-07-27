import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-navabr',
  standalone: true,
  imports: [],
  templateUrl: './mobile-navabr.component.html',
  styleUrl: './mobile-navabr.component.scss'
})
export class MobileNavabrComponent {
 @ViewChild('navMenu', { static: true }) navMenu!: ElementRef;
  @ViewChild('togglerBtn', { static: true }) togglerBtn!: ElementRef;

  menuOpen = false;

  constructor(private renderer: Renderer2) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.renderer.addClass(this.navMenu.nativeElement, 'active');
      this.renderer.addClass(this.togglerBtn.nativeElement, 'active');
      this.renderer.setAttribute(this.togglerBtn.nativeElement, 'aria-expanded', 'true');
    } else {
      this.renderer.removeClass(this.navMenu.nativeElement, 'active');
      this.renderer.removeClass(this.togglerBtn.nativeElement, 'active');
      this.renderer.setAttribute(this.togglerBtn.nativeElement, 'aria-expanded', 'false');
    }
  }
}
