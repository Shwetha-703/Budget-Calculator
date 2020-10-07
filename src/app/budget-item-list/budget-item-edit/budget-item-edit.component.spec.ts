import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemEditComponent } from './budget-item-edit.component';

describe('BudgetItemEditComponent', () => {
  let component: BudgetItemEditComponent;
  let fixture: ComponentFixture<BudgetItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
