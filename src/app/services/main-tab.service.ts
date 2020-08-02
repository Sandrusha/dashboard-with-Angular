import { Injectable } from '@angular/core';
import { MainTab } from '../interfaces/mainTab';
import { MAINTABS } from '../mocks/mock-mainTabs';

@Injectable({
  providedIn: 'root'
})

export class MainTabService {

  constructor() { }

  getMainTabs(): MainTab[] {
    return MAINTABS;
  }
}