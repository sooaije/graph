import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadNameComponent } from './road-name.component';

describe('RoadNameComponent', () => {
  let component: RoadNameComponent;
  let fixture: ComponentFixture<RoadNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
