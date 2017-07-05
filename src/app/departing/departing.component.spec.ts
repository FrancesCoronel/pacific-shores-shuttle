import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartingComponent } from './departing.component';

describe('DepartingComponent', () => {
  let component: DepartingComponent;
  let fixture: ComponentFixture<DepartingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
