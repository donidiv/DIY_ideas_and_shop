import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BalanceComponent } from './balance/balance.component';
import { UserIdeasComponent } from './user-ideas/user-ideas.component';
import { SharedModule } from '../shared/shared.module';



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
    UsersRoutingModule,
    SharedModule,
  ],
  exports: [
    // RegisterComponent,
    // LoginComponent,
  ]
})
export class UsersModule { }
