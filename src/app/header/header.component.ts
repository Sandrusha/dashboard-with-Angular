import { Component, OnInit } from '@angular/core';
import { MainTabService } from '../services/main-tab.service';
import { MainTab } from '../interfaces/mainTab';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  maintabs: MainTab[];
  user: User;
  searchText = "";
  currentMainTab: MainTab;

  constructor(private mainTabService: MainTabService, private userService: UserService) { }

  ngOnInit(): void {
    this.getMainTabs();
    this.getUser();
    this.currentMainTab = this.maintabs[0];
  }

  getMainTabs(): void {
    this.maintabs = this.mainTabService.getMainTabs();
  }

  getUser(): void {
    this.user = this.userService.getUser();
  }

  onClickMainTab(maintab): void {
    this.currentMainTab = maintab;
  }
}
