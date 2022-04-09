import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { CardComponent } from './components/main/card/card.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/registration/login/login.component';
import { SortingComponent } from './components/header/sorting/sorting.component';
import { MainComponent } from './components/main/main.component';
import { BackgroundDirective } from './directives/background.directive.ts.directive';
import { ShareService } from './services/share-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    ProfileComponent,
    NavebarComponent,
    CardComponent,
    RegistrationComponent,
    LoginComponent,
    SortingComponent,
    MainComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
