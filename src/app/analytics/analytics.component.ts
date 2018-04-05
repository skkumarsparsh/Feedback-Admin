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

  firstselected0:boolean;
  secondselected0:boolean;
  firstselected1:boolean;
  secondselected1:boolean;
  showChart:boolean;
  selectValue0;
  selectValue1;
  selectValue2;
  selectValue3;
  displayValue1;
  displayValue2;
  data;
  radioValue;
  semester = [];
  section = [];
  teachers = [];
  subjects = [];

  constructor(private http:Http, private authService:AuthService, private route: Router) {
    this.firstselected0 = false;
    this.secondselected0 = false;
    this.firstselected1 = false;
    this.secondselected1 = false;
    this.showChart = false;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://127.0.0.1:8080/get-s3t', {}, options).subscribe(res => {
      this.data = res.json() || {};
      console.log("Data received from the server - ")
      console.log(this.data);
      this.semester = this.data["semesters"]
      this.section = this.data["sections"]
      this.teachers = this.data["teachers"]
      this.subjects = this.data["subjects"]
    });
  }

  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 65, 59, 90, 81, 56, 55], label: 'Series A - With a very very very long label'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series B - With a very very long label'},
    {data: [65, 59, 90, 81, 56, 55, 65, 59, 90, 81, 56, 55], label: 'Series A - With a very very very very long label'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series B - With a very very very long label'},
    {data: [65, 59, 90, 81, 56, 55, 65, 59, 90, 81, 56, 55], label: 'Series A - With a very very very very long label'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series B - With a very long label'},
  ];
  public barChartType:string = 'bar';
  public radarChartType:string = 'radar';

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

  show() {
    this.showChart = true;
    if(this.radioValue == "1") {
      this.displayValue1 = this.selectValue0;
      this.displayValue2 = this.selectValue1;
    } else if(this.radioValue == "2"){
      this.displayValue1 = this.selectValue2;
      this.displayValue2 = this.selectValue3;
    }
  }

  firstSelectChanged1() {
    if(this.firstselected0 == false) {
      this.firstselected0 = true;
      this.secondselected0 = false;
      this.selectValue1 = null;
    } else {
      this.secondselected0 = false;
      this.selectValue1 = null;
    }
  }

  secondSelectChanged1() {
    if(this.secondselected0 == false) {
      this.secondselected0 = true;
    } 
  }

  firstSelectChanged2() {
    if(this.firstselected1 == false) {
      this.firstselected1 = true;
      this.secondselected1 = false;
      this.selectValue3 = null;
    } else {
      this.secondselected1 = false;
      this.selectValue3 = null;
    }
  }

  secondSelectChanged2() {
    if(this.secondselected1 == false) {
      this.secondselected1 = true;
    } 
  }

  radioChanged() {
    this.showChart = false;
    this.firstselected0 = false;
    this.firstselected1 = false;
    this.secondselected0 = false;
    this.secondselected1 = false;
    this.selectValue0 = null;
    this.selectValue1 = null;
    this.selectValue2 = null;
    this.selectValue3 = null;
  }
}