import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private authService:AuthService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
