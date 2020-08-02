import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { Statistics } from '../interfaces/statistics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText = "";
  statistics: Statistics[] = [];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statistics = this.statisticsService.getStatistics();
  }

  onClickAdd(): void {
    const newElem = {
      name : "New Object", values: [
        {value: 1538, label: " "},
        {value: 3254, label: "GBP"},
        {value: 1875, label: " "},
        {value: 9.13, label: "GBP"} 
     ]
    }
    this.statistics.push(newElem);
  }
}