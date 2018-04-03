import { Component, OnInit } from '@angular/core';
import { Http,Headers,RequestOptions,RequestMethod } from '@angular/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  firstselected:boolean;
  secondselected:boolean;
  initial:boolean;
  selectValue0;
  selectValue1;
  data;
  semester = [];
  section = [];

  constructor(private http:Http, private authService:AuthService, private route: Router) {
    this.firstselected = false;
    this.secondselected = false
    this.initial = false;
    this.section = ['Class A', 'Class B', 'Class C', 'Class D'];
  }

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
      var temp = this.data;
      var s = [];
      for(var t in temp) {
        this.semester.push(t);
        s.push(temp[t]);
      }
      console.log(this.semester)
    });
  }

  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 65, 59, 90, 81, 56, 55], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series B'},
  ];
  public barChartType:string = 'bar';
  public radarChartType:string = 'radar';

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

  show() {
    this.initial = true;
  }

  firstSelectChanged() {
    if(this.firstselected == false) {
      this.firstselected = true;
      this.secondselected = false;
      this.selectValue1 = null;
    } else {
      this.secondselected = false;
      this.selectValue1 = null;
    }
  }

  secondSelectChanged() {
    if(this.secondselected == false) {
      this.secondselected = true;
    } 
  }
}