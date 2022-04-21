import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SortingComponent } from './components/header/sorting/sorting.component';
import { SharedModule } from '../shared/shared.module';
import { EmptyComponent } from './components/empty/empty.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SortingComponent,
    EmptyComponent,
 
  ],
  exports: [
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
