import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivingComponent } from './arriving.component';

describe('ArrivingComponent', () => {
  let component: ArrivingComponent;
  let fixture: ComponentFixture<ArrivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
