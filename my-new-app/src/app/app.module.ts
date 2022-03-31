import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { ProfileComponent } from './profile/profile.component';
import { NavebarComponent } from './navebar/navebar.component';
import { CardComponent } from './card/card.component';
import { CreateCardComponent } from './card/create-card/create-card.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './registration/login/login.component';

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
    CreateCardComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
