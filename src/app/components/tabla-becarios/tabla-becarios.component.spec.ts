import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBecariosComponent } from './tabla-becarios.component';

describe('TablaBecariosComponent', () => {
  let component: TablaBecariosComponent;
  let fixture: ComponentFixture<TablaBecariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaBecariosComponent]
    });
    fixture = TestBed.createComponent(TablaBecariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
