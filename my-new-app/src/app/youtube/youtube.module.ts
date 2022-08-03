import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './pages/details/details.component';
import { MoreDirective } from './directives/more.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SearchResultsComponent,
    DetailsComponent,
    MoreDirective,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
    MatButtonModule
  ],
  providers: []
})
export class YoutubeModule { }
