import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleReservaComponent } from './modal-detalle-reserva.component';

describe('ModalDetalleReservaComponent', () => {
  let component: ModalDetalleReservaComponent;
  let fixture: ComponentFixture<ModalDetalleReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDetalleReservaComponent]
    });
    fixture = TestBed.createComponent(ModalDetalleReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
