import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  bounceClass = 'animate__animated';
  currentLanguage = 'EN';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.setBounceAnimation();
  }

  toggleLanguage() {
    if (this.translate.currentLang === 'de') {
      this.translate.use('en');
      this.currentLanguage = 'EN';
    } else {
      this.translate.use('de');
      this.currentLanguage = 'DE';
    }
  }

  setBounceAnimation() {
    setInterval(() => {
      this.bounceClass = '';
      setTimeout(() => {
        this.bounceClass = 'animate__animated animate__bounce';
      }, 50);
    }, 10000);
  }
}
