import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOperatorDialogComponent } from './new-operator-dialog.component';

describe('NewOperatorDialogComponent', () => {
  let component: NewOperatorDialogComponent;
  let fixture: ComponentFixture<NewOperatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOperatorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOperatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
