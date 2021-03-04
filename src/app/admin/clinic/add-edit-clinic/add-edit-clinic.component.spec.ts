import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditClinicComponent } from './add-edit-clinic.component';

describe('AddEditClinicComponent', () => {
  let component: AddEditClinicComponent;
  let fixture: ComponentFixture<AddEditClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
