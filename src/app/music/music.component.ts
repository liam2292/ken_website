import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  isPopupVisible = false;
  popupImageUrl: string = '';
  popupSongName: string = '';
  popupSongNameNumerals: string[] = [];
  popupScNumerals: string[] = [];
  popupSoundcloudUrls: string ='';


  showPopup(index: number) {
    this.popupImageUrl = `assets/images/housewerk-${index + 1}.jpg`;
    this.popupSongNameNumerals = ['I','II', 'III', 'IV']
    this.popupSongName = `Housewerk ${this.popupSongNameNumerals[index]}`;
    this.isPopupVisible = true;
    this.popupScNumerals = ['house-mix-2','house-werk-2', 'housewerk-iii', 'housewerk-IV']
    this.popupSoundcloudUrls = `https://soundcloud.com/kenzilimtong/${this.popupScNumerals[index]}`;
    

  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
