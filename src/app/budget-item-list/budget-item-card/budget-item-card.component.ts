import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/app/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  
  @Input() newItem : BudgetItem;
  @Output() xButtonClick : EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick : EventEmitter<any> = new EventEmitter<any>();
  isIncome : boolean;
  constructor() { }

  ngOnInit(): void {
    this.isIncome = this.newItem.amount>=0;
  }

  onDelete(){        
    this.xButtonClick.emit();    
  }

  onCardClick(){    
    this.cardClick.emit();
  }
}
