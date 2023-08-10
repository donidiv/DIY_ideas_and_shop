import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { BalanceComponent } from "./balance/balance.component";
import { AuthActivate } from "../core/guards/auth.activate";
import { UserIdeasComponent } from "./user-ideas/user-ideas.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        //todo canActivate??
    },
    {
        path: 'register',
        component: RegisterComponent,
        //todo canActivate??
        
    },
    {
        path: 'profile/personalInfo',
        component: ProfileComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'profile/balance',
        component: BalanceComponent,
        canActivate: [AuthActivate]
    },
    {
        path: ':userId/profile',
        component: UserIdeasComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}