import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarReservaComponent } from '../modal-agregar-reserva/modal-agregar-reserva.component';

@Component({
  selector: 'app-gabinete',
  templateUrl: './gabinete.component.html',
  styleUrls: ['./gabinete.component.css'],
})
export class GabineteComponent {
  constructor(private modalService: NgbModal) {}

  openModalAgregarReserva() {
    const modalRef = this.modalService.open(ModalAgregarReservaComponent);
  }
}
