import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologyAboutComponent } from './pathology-about.component';

describe('PathologyAboutComponent', () => {
  let component: PathologyAboutComponent;
  let fixture: ComponentFixture<PathologyAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathologyAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathologyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
