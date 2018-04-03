import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'adminconsole', component: ConsoleComponent, canActivate: [LoggedInGuard] }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsoleComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
