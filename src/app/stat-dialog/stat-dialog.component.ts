import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Statistics } from '../interfaces/statistics';

@Component({
    selector: 'statistics-dialog',
    templateUrl: 'stat-dialog.component.html',
  })
  export class StatDialog {
  
    constructor(
      public dialogRef: MatDialogRef<StatDialog>,
      @Inject(MAT_DIALOG_DATA) public data: Statistics) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }