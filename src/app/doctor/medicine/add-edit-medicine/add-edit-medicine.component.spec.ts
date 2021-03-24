import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMedicineComponent } from './add-edit-medicine.component';

describe('AddEditMedicineComponent', () => {
  let component: AddEditMedicineComponent;
  let fixture: ComponentFixture<AddEditMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
