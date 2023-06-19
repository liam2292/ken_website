import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MusicPopupComponent } from './music-popup/music-popup.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    SocialMediaComponent,
    ContactInfoComponent,
    NavbarComponent,
    MusicPopupComponent,
    AdminPageComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

