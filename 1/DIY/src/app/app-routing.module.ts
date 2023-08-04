import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/home'
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: "users",
    loadChildren: ()=> import('./users/users.module').then((m)=> m.UsersModule),
  },
  // {
  //   path: 'error', component: ErrorComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
