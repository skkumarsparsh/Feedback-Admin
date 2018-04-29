import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


import { ChartsModule } from 'ng2-charts';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { EditDatabaseComponent } from './edit-database/edit-database.component';
import { EmailInfoComponent } from './email-info/email-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'adminconsole', component: ConsoleComponent, canActivate: [LoggedInGuard] },
  { path: 'analytics', component: AnalyticsComponent, canActivate: [LoggedInGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [LoggedInGuard] },
  { path: 'editdatabase', component: EditDatabaseComponent, canActivate: [LoggedInGuard] },
  { path: 'email-info', component: EmailInfoComponent, canActivate: [LoggedInGuard] }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsoleComponent,
    LoginDialogComponent,
    AnalyticsComponent,
    SettingsComponent,
    EditDatabaseComponent,
    EmailInfoComponent
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
    MatDialogModule,
    ChartsModule,
    MatSelectModule,
    HttpModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule
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
