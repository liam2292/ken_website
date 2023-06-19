import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  title: string = 'ken_website';
  isMenuHidden: boolean = true;

  toggleContent(): void {
    this.isMenuHidden = !this.isMenuHidden;
  }

  scrollToHeader() {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToHeaderAndClose() {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuHidden = !this.isMenuHidden;
  }

  scrollToContactInfoAndClose() {
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo) {
      contactInfo.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuHidden = !this.isMenuHidden;
  }

  scrollToSocialsAndClose() {
    const socialMedia = document.getElementById('social-media');
    if (socialMedia) {
      socialMedia.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuHidden = !this.isMenuHidden;
  }
}
