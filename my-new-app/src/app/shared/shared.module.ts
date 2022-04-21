import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { BackgroundDirective } from './directives/background.directive.ts.directive';
import { DateFilterDirective } from './directives/date-filter.directive';
import { ViewFilterDirective } from './directives/view-filter.directive';



@NgModule({
  declarations: [
    SearchComponent,
    SearchItemComponent,
    FilterTextPipe,
    BackgroundDirective,
    DateFilterDirective,
    ViewFilterDirective,

  ],
  exports: [
    SearchComponent,
    SearchItemComponent,
    FilterTextPipe,
    BackgroundDirective,
    DateFilterDirective,
    ViewFilterDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
