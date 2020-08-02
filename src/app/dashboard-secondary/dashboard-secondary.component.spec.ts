import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSecondaryComponent } from './dashboard-secondary.component';

describe('DashboardSecondaryComponent', () => {
  let component: DashboardSecondaryComponent;
  let fixture: ComponentFixture<DashboardSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
