import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   // component: containerComponent
  //   children: [
  //     {
  //       path: 'login',
  //       loadChildren: () =>
  //       import('./auth/auth.module').then(a => a.AuthModule)
  //     },
      {
        path: 'main',
        loadChildren: () =>
        import('./youtube/youtube.module').then(a => a.YoutubeModule)
        // canLoad: [AthGuard],
      },
  //     {
  //       path: '404',
  //     //  component: NotFoundErrorComponent
  //     },
  //     {
  //       path: '**',
  //       // redirectTo: '404'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
