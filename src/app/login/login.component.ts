import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login(username,password) {
    if (!this.authService.login(username, password)) {
      console.log("Incorrect Credentials")
    } else {
      this.route.navigate(['/adminconsole']);
    }
    return false;
  }

}
