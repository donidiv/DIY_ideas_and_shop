import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "users",
    loadChildren: ()=> import('./users/users.module').then((m)=> m.UsersModule),
  },
  {
    path: "ideas",
    loadChildren: ()=> import('./idea/idea.module').then((m)=> m.IdeaModule),
  },
  {
    path: 'error', component: ErrorComponent
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
