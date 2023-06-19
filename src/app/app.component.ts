import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('header') header!: ElementRef;
  @ViewChild('music') music!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('social') social!: ElementRef;

  scrollToSection(section: string): void {
    const elementId = section;
    const element = document.getElementById(elementId);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
