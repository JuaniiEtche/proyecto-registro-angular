import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  private logoFacebook = '../assets/images/facebook-logo.png';
  private logoInstagram = '../assets/images/instagram-logo.png';
  private logoUtn = '../assets/images/logo.png';

  getLogoFacebook() {
    return this.logoFacebook;
  }

  getLogoInstagram() {
    return this.logoInstagram;
  }

  getLogoUtn() {
    return this.logoUtn;
  }
}
