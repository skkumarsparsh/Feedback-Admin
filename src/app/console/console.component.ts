import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor(private authService:AuthService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
