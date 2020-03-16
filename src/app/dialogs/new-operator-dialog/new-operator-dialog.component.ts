import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-operator-dialog',
  templateUrl: './new-operator-dialog.component.html',
  styleUrls: ['./new-operator-dialog.component.css']
})
export class NewOperatorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewOperatorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: null) { }

  name: string;

  ngOnInit(): void { }
}
