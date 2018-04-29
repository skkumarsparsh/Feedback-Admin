import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http,Headers,RequestOptions,RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-database',
  templateUrl: './edit-database.component.html',
  styleUrls: ['./edit-database.component.css']
})
export class EditDatabaseComponent implements OnInit {
  data;

  constructor(private authService:AuthService, private route: Router,private http:Http) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://127.0.0.1:8080/teachers', {}, options).subscribe(res => {
      this.data = res.json() || {};
      console.log("Data received from the server - ")
      console.log(this.data);
    });
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
