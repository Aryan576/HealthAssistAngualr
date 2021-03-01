import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPathologyComponent } from './add-edit-pathology.component';

describe('AddEditPathologyComponent', () => {
  let component: AddEditPathologyComponent;
  let fixture: ComponentFixture<AddEditPathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPathologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
