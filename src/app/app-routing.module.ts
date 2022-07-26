import { AuthenticationModule } from './modules/authentication/authentication.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // implentar depois
  // {
  //   path:'',
  //   component: HomeComponent
  // },
  { path: 'auhenticate', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) },
  {
    path: '',
    redirectTo: '/auhenticate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
