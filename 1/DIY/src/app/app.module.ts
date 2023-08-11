import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { appInterceptorProvider } from './app.interceptor';
import { IdeaModule } from './idea/idea.module';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { WelocomeNoUserComponent } from './welcome/welocome-no-user/welocome-no-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    HomeComponent,
    WelcomeComponent,
    NotFoundComponent,
    WelocomeNoUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UsersModule,
    HttpClientModule,
    IdeaModule,
    SharedModule
  ],
  providers: [appInterceptorProvider,  CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
