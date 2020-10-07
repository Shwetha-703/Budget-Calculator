import { Component, OnInit, Inject } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item-model';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-item-edit',
  templateUrl: './budget-item-edit.component.html',
  styleUrls: ['./budget-item-edit.component.scss']
})
export class BudgetItemEditComponent implements OnInit {

  constructor( public dialogRef : MatDialogRef<BudgetItemEditComponent>,
    @Inject(MAT_DIALOG_DATA) public item : BudgetItem
    ) 
    { }

  ngOnInit(): void {
  }
  onFormSubmit(updateditem : BudgetItem){
    this.dialogRef.close(updateditem);
  }

}
