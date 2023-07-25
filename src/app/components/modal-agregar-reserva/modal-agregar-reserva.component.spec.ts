import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarReservaComponent } from './modal-agregar-reserva.component';

describe('ModalAgregarReservaComponent', () => {
  let component: ModalAgregarReservaComponent;
  let fixture: ComponentFixture<ModalAgregarReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAgregarReservaComponent]
    });
    fixture = TestBed.createComponent(ModalAgregarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
