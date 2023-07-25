import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLineasComponent } from './listado-lineas.component';

describe('ListadoLineasComponent', () => {
  let component: ListadoLineasComponent;
  let fixture: ComponentFixture<ListadoLineasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoLineasComponent]
    });
    fixture = TestBed.createComponent(ListadoLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
