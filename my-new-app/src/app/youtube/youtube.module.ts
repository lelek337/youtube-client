import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule
  ]
})
export class YoutubeModule { }
