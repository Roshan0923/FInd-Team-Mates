import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog-join-group',
  templateUrl: './dialog-join-group.component.html',
  styleUrls: ['./dialog-join-group.component.css']
})
export class DialogJoinGroupComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<DialogJoinGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
