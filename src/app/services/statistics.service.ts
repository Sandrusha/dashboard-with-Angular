import { Injectable } from '@angular/core';
import { Statistics } from '../interfaces/statistics';
import { STATISTICS } from '../mocks/mock-statistics';

@Injectable({
  providedIn: 'root'
})

export class StatisticsService {

  constructor() { }

  getStatistics(): Statistics[] {
    return STATISTICS;
  }
}