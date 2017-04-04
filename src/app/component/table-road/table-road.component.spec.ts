import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRoadComponent } from './table-road.component';

describe('TableRoadComponent', () => {
  let component: TableRoadComponent;
  let fixture: ComponentFixture<TableRoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
