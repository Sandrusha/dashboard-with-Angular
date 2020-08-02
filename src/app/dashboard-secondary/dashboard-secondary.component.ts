import { Component, OnInit } from '@angular/core';
import { Statistics } from '../interfaces/statistics';
import { StatisticsService } from '../services/statistics.service';
import { RandTextService } from '../services/rand-text.service';
import { RandText } from '../interfaces/randText';

@Component({
  selector: 'app-dashboard-secondary',
  templateUrl: './dashboard-secondary.component.html',
  styleUrls: ['./dashboard-secondary.component.css']
})
export class DashboardSecondaryComponent implements OnInit {
  statistics: Statistics[] = [];
  randTextList: RandText[] = [];

  constructor(private statisticsService: StatisticsService, private randTextService: RandTextService) { }

  ngOnInit(): void {
    this.statistics = this.statisticsService.getStatistics();
    this.randTextList = this.randTextService.getRandText();
  }
}
