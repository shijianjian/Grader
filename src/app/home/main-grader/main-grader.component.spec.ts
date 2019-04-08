import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGraderComponent } from './main-grader.component';

describe('MainGraderComponent', () => {
  let component: MainGraderComponent;
  let fixture: ComponentFixture<MainGraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainGraderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
