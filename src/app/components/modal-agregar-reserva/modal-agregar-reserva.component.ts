import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-agregar-reserva',
  templateUrl: './modal-agregar-reserva.component.html',
  styleUrls: ['./modal-agregar-reserva.component.css'],
})
export class ModalAgregarReservaComponent {
  constructor(public activeModal: NgbActiveModal) {}

  registrarReserva(): void {
    this.activeModal.close();
  }

  onCloseModal(): void {
    this.activeModal.close();
  }
}
