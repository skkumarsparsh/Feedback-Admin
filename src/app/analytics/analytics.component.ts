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

  public radarChartLabels:string[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12'];

  public radarChartData:any = [];
  public barChartType:string = 'bar';
  public radarChartType:string = 'radar';

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

  show() {
    var selectedOption;
    if(this.radioValue == "1") {
      this.displayValue1 = this.selectValue0;
      this.displayValue1 = this.displayValue1[this.displayValue1.length-1]
      this.displayValue2 = this.selectValue1;
      this.displayValue2 = this.displayValue2[this.displayValue2.length-1]
      selectedOption = "semestersection";
    } else if(this.radioValue == "2"){
      this.displayValue1 = this.selectValue2;
      this.displayValue2 = this.selectValue3;
      selectedOption = "teachersubject";
    }
    var stuffbeingsent = {
                      "selectedOption":selectedOption,
                      "show":[this.displayValue1,this.displayValue2]
                    }
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://127.0.0.1:8080/get-responses', stuffbeingsent, options).subscribe(res => {
      this.data = res.json() || {};
      console.log("Data received from the server - ")
      console.log(this.data);
      var responses = this.data["responses"];
      var t;
      this.radarChartData = []
      for(t in responses) {
        var d,l
        console.log(responses[t])
        d = responses[t]['r']
        if(this.radioValue == "1") {
          l = responses[t]['teacher'] + " - " + responses[t]['subject'];
        } else if(this.radioValue == "2") {
          l = responses[t]['semester'] + " - " + responses[t]['section'];
        }
        var obj = new Object({
          data : d,
          label : l
        })
        this.radarChartData.push(obj)
      }
      this.showChart = true;
    });
  }

  firstSelectChanged1() {
    this.showChart = false;
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
    this.showChart = false;
    if(this.secondselected0 == false) {
      this.secondselected0 = true;
    } 
  }

  firstSelectChanged2() {
    this.showChart = false;
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
    this.showChart = false;
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