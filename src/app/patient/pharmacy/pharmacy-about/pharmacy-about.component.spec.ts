import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAboutComponent } from './pharmacy-about.component';

describe('PharmacyAboutComponent', () => {
  let component: PharmacyAboutComponent;
  let fixture: ComponentFixture<PharmacyAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
