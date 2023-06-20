import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() navigateToSection: EventEmitter<string> = new EventEmitter<string>();
  isMenuHidden = true;

  toggleContent(): void {
    this.isMenuHidden = !this.isMenuHidden;
  }

  scrollToSection(section: string): void {
    this.navigateToSection.emit(section);
    this.isMenuHidden = true; // Close the menu after clicking on a section
  }

  scrollToTopLogo() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
}
