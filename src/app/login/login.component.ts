import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public authService: AuthService, private route: Router, public dialog: MatDialog) {
    if(authService.getUser()) {
      this.route.navigate(['/adminconsole']);
    }
  }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '330px',
      data: {}
    });
  }

  login(username,password) {
    if (!this.authService.login(username, password)) {
      this.openDialog();
    } else {
      this.route.navigate(['/adminconsole']);
    }
    return false;
  }

}
