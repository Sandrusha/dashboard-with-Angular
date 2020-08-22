import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { Statistics } from '../interfaces/statistics';
import { MatDialog } from '@angular/material/dialog';
import { StatDialog } from '../stat-dialog/stat-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText = "";
  statistics: Statistics[] = [];
  allStatistics: Statistics[] = [];

  constructor(private statisticsService: StatisticsService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(StatDialog, {
      width: '960px',
      data: {name : " ", values: [
        {value:  0, label: " "},
        {value: 0, label: " "},
        {value: 0, label: " "},
        {value: 0, label: " "} 
     ]}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.allStatistics.push(result);
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.statistics = this.statisticsService.getStatistics();
    this.allStatistics = this.statisticsService.getStatistics();
  }

  onClickAdd(): void {
    this.openDialog();
  }
}