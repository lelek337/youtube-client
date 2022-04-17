import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SearchResultsComponent } from './shared/components/search/search-results/search-results.component';
import { SearchItemComponent } from './shared/components/search/search-item/search-item.component';
import { SortingComponent } from './core/components/header/sorting/sorting.component';
import { BackgroundDirective } from './directives/background.directive.ts.directive';
import { ShareService } from './services/share-service.service';
import { DateFilterDirective } from './directives/date-filter.directive';
import { ViewFilterDirective } from './directives/view-filter.directive';
import { FilterTextPipe } from './shared/pipes/filter-text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SortingComponent,
    BackgroundDirective,
    DateFilterDirective,
    ViewFilterDirective,
    FilterTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
