import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiLocationComponent } from './thai-location.component';

describe('ThaiLocationComponent', () => {
  let component: ThaiLocationComponent;
  let fixture: ComponentFixture<ThaiLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaiLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
