import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item-model';

import { MatDialog} from '@angular/material/dialog'
import { BudgetItemEditComponent } from '../../app/budget-item-list/budget-item-edit/budget-item-edit.component';


export interface UpdateEvent{
  old : BudgetItem;
  new : BudgetItem;
}


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetitems : BudgetItem[];
  @Output() deleteEvent : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() updateEvent : EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor( public dialog : MatDialog ) {}

  ngOnInit(): void {
  }

  onDeleteButtonCliked(item:BudgetItem){       
    this.deleteEvent.emit(item); 
  }
  onCardClick(item: BudgetItem){
    
    const dialogRef = this.dialog.open(BudgetItemEditComponent, {
      width: '580px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //this.budgetitems[this.budgetitems.indexOf(item)] = result;
        this.updateEvent.emit({
          old : item,
          new : result
        })
      }
    });
  }

}
