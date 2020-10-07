import { Component, Input, OnInit, Output } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { BudgetItem } from '../shared/models/budget-item-model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  budgetItems :  BudgetItem[] = new Array<BudgetItem>();
  totalBudget : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(item:BudgetItem){
      this.budgetItems.push(item);
      this.totalBudget += item.amount;
  }
  onBudgetItemDelete(item: BudgetItem){    
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;
  }
  onUpdateEvent(updateEvent : UpdateEvent ){
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

}
