import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 65, 59, 90, 81, 56, 55], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series B'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series C'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series D'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series E'},
    {data: [28, 48, 40, 19, 96, 27, 28, 48, 40, 19, 96, 27], label: 'Series F'}
  ];
  public barChartType:string = 'bar';
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}
