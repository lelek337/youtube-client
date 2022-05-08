import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  //  {
  //    path: 'home',
  //    redirectTo: 'main',
  //    pathMatch: 'full',
  //  },
      {
        path: 'login',
        loadChildren: () =>
        import('./auth/auth.module').then(a => a.AuthModule),
      },
      {
        path: 'main',
        loadChildren: () =>
        import('./youtube/youtube.module').then(a => a.YoutubeModule),
        canLoad: [AuthGuard],
      },
      {
        path: '404',
       component: ErrorComponent
      },
      {
        path: '**',
        redirectTo: '404'
     }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
