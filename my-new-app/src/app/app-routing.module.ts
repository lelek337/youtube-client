import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { EmptyComponent } from './core/components/empty/empty.component';
import { ErrorComponent } from './core/components/error/error.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';


const routes: Routes = [
  {
      path: '',
    component: EmptyComponent,
  },
  {
    path: 'registration',
    loadChildren: () =>
    import('./auth/auth.module').then(a => a.AuthModule),
    component: RegistrationComponent,
  },
      {
        path: 'login',
        loadChildren: () =>
        import('./auth/auth.module').then(a => a.AuthModule),
        component: LoginComponent,
      },
      {
        path: 'main',
        loadChildren: () =>
        import('./youtube/youtube.module').then(a => a.YoutubeModule),
        component: SearchResultsComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
