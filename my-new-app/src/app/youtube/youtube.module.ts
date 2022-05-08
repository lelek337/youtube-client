import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './pages/details/details.component';
import { MoreDirective } from './directives/more.directive';

@NgModule({
  declarations: [
    SearchResultsComponent,
    DetailsComponent,
    MoreDirective,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule
  ]
})
export class YoutubeModule { }
