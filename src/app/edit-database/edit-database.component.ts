import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-database',
  templateUrl: './edit-database.component.html',
  styleUrls: ['./edit-database.component.css']
})
export class EditDatabaseComponent implements OnInit {

  constructor(private authService:AuthService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
