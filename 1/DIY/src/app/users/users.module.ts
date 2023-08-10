import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BalanceComponent } from './balance/balance.component';
import { UserIdeasComponent } from './user-ideas/user-ideas.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BalanceComponent,
    UserIdeasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  exports: [
    // RegisterComponent,
    // LoginComponent,
  ]
})
export class UsersModule { }
