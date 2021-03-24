import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDiseaseComponent } from './add-edit-disease.component';

describe('AddEditDiseaseComponent', () => {
  let component: AddEditDiseaseComponent;
  let fixture: ComponentFixture<AddEditDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
