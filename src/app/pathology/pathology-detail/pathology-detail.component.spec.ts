import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologyDetailComponent } from './pathology-detail.component';

describe('PathologyDetailComponent', () => {
  let component: PathologyDetailComponent;
  let fixture: ComponentFixture<PathologyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathologyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathologyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
