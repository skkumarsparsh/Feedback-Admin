import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  login(username: string,password: string): boolean {
    if (username === "username" && password ==="password") {
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('user');
  }

  getUser(): any {
    return localStorage.getItem('user');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
