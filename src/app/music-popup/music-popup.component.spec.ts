import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPopupComponent } from './music-popup.component';

describe('MusicPopupComponent', () => {
  let component: MusicPopupComponent;
  let fixture: ComponentFixture<MusicPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicPopupComponent]
    });
    fixture = TestBed.createComponent(MusicPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
