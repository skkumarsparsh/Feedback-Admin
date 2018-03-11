import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'adminconsole', component: ConsoleComponent, canActivate: [LoggedInGuard] }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
