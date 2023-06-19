import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    SocialMediaComponent,
    ContactInfoComponent,
    NavbarComponent,
    HeaderComponent,
    AppComponent,


  ],
  imports: [
    BrowserModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

