import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerThailocationComponent } from './marker-thailocation.component';

describe('MarkerThailocationComponent', () => {
  let component: MarkerThailocationComponent;
  let fixture: ComponentFixture<MarkerThailocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerThailocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerThailocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
