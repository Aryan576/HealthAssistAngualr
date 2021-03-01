import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPharmacyComponent } from './add-edit-pharmacy.component';

describe('AddEditPharmacyComponent', () => {
  let component: AddEditPharmacyComponent;
  let fixture: ComponentFixture<AddEditPharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
