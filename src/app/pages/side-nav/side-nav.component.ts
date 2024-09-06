import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}
