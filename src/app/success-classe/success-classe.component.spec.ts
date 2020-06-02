import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessClasseComponent } from './success-classe.component';

describe('SuccessClasseComponent', () => {
  let component: SuccessClasseComponent;
  let fixture: ComponentFixture<SuccessClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
