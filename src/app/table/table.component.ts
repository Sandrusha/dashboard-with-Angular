import { Component, OnInit, Input } from '@angular/core';
import { Statistics } from '../interfaces/statistics';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input()
  rows: Statistics[];
  constructor() { }

  ngOnInit(): void {
  }
}