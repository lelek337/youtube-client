import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SortingComponent } from './components/header/sorting/sorting.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './components/error/error.component';
import { YoutubeModule } from '../youtube/youtube.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SortingComponent,
    ErrorComponent,
  ],
  exports: [
    HeaderComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // YoutubeModule
  ]
})
export class CoreModule { }
