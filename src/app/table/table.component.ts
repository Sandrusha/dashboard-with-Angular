import { Component, OnInit, Input } from '@angular/core';
import { Statistics } from '../interfaces/statistics';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  @Input()
  rows: Statistics[];
  @Input()
  searchText: string;
  constructor() { }

  ngOnInit(): void {
  }
}