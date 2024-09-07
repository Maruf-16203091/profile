import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'] // Fixed typo: "styleUrl" should be "styleUrls"
})
export class SideNavComponent implements OnInit {
  bounceClass = 'animate__animated';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.setBounceAnimation();
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  setBounceAnimation() {
    setInterval(() => {
      this.bounceClass = '';  // Reset the animation class
      setTimeout(() => {
        this.bounceClass = 'animate__animated animate__bounce';
      }, 50);  // Short delay to reapply the bounce class
    }, 5000);  // Trigger every 15 seconds
  }
}
