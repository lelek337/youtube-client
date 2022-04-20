import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { BackgroundDirective } from './directives/background.directive.ts.directive';
import { DateFilterDirective } from './directives/date-filter.directive';
import { ViewFilterDirective } from './directives/view-filter.directive';
import { FilterDateService } from './services/filter-date.service';
import { FilterTextService } from './services/filter-text.service';
import { FilterViewService } from './services/filter-view.service';
import { ShareService } from './services/share-service.service';

@NgModule({
  declarations: [
    SearchComponent,
    SearchItemComponent,
    FilterTextPipe,
    BackgroundDirective,
    DateFilterDirective,
    ViewFilterDirective,
    // FilterDateService,
    // FilterTextService,
    // FilterViewService,
    // ShareService,
  ],
  exports: [
    SearchComponent,
    SearchItemComponent,
    FilterTextPipe,
    // BackgroundDirective,
    // DateFilterDirective,
    // ViewFilterDirective,
    // FilterDateService,
    // FilterTextService,
    // FilterViewService,
    // ShareService,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
