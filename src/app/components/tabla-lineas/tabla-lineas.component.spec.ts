import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaLineasComponent } from './tabla-lineas.component';

describe('TablaLineasComponent', () => {
  let component: TablaLineasComponent;
  let fixture: ComponentFixture<TablaLineasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaLineasComponent],
    });
    fixture = TestBed.createComponent(TablaLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
