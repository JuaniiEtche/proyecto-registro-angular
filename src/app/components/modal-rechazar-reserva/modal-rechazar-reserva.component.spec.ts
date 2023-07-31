import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRechazarReservaComponent } from './modal-rechazar-reserva.component';

describe('ModalRechazarReservaComponent', () => {
  let component: ModalRechazarReservaComponent;
  let fixture: ComponentFixture<ModalRechazarReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRechazarReservaComponent],
    });
    fixture = TestBed.createComponent(ModalRechazarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
