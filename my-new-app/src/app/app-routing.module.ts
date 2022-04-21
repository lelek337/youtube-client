import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './core/components/empty/empty.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';


const routes: Routes = [
  {
    path: '',
    component: EmptyComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
        import('./auth/auth.module').then(a => a.AuthModule)
      },
      {
        path: 'main',
        loadChildren: () =>
        import('./youtube/youtube.module').then(a => a.YoutubeModule),
        component: SearchResultsComponent,
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
