import { Component, OnInit, Input } from '@angular/core';
import { SubMenuTab } from '../interfaces/subMenuTab';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})

export class SubheaderComponent implements OnInit {
  @Input()
  set subTabList(val: SubMenuTab[]) {
    this._subTabList = val;
    if (val && val.length > 0) {
      this.currentSubTab = val[0];
    }
  }
  get subTabList(): SubMenuTab[] {
    return this._subTabList;
  }
  private _subTabList; //no one can access it directly

  currentSubTab: SubMenuTab;
  constructor( private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['dashboard'], { relativeTo: this.route });
  }

  onClickSubMenu(submenutab): void {
    this.currentSubTab = submenutab;
  }
}