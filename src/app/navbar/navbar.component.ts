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
}
