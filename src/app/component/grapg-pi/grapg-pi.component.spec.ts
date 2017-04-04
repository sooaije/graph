import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapgPiComponent } from './grapg-pi.component';

describe('GrapgPiComponent', () => {
  let component: GrapgPiComponent;
  let fixture: ComponentFixture<GrapgPiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapgPiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapgPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
