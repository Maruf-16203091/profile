import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Component imports
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';

import { AppRoutingModule } from './app-routing.module';

// FontAwesome imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faReact,
  faNode,
  faPhp,
  faGit,
  faMicrosoft,
  faAws,
  faNpm,
  faSass,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faUtensils,
  faPlane,
  faFilm,
  faBook,
  faCamera,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,

} from '@fortawesome/free-solid-svg-icons';

// Translation loader factory function
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    SlickCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    FontAwesomeModule, // Import FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // Configure the FontAwesome library in the constructor
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faTwitter,
      faInstagram,
      faLinkedin,
      faHtml5,
      faCss3Alt,
      faJs,
      faAngular,
      faReact,
      faNode,
      faPhp,
      faGit,
      faMicrosoft,
      faAws,
      faDatabase,
      faUtensils,
      faPlane,
      faFilm,
      faCamera,
      faNpm,
      faSass,
      faPhone,
      faEnvelope,
      faMapMarkerAlt,
      faBootstrap,
    );
  }
}
