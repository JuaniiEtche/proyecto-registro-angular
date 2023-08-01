import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarReservaComponent } from '../modal-agregar-reserva/modal-agregar-reserva.component';

@Component({
  selector: 'app-gabinete',
  templateUrl: './gabinete.component.html',
  styleUrls: ['./gabinete.component.css'],
})
export class GabineteComponent {
  constructor(private dialog: MatDialog) {}

  openModalAgregarReserva() {
    const dialogRef = this.dialog.open(ModalAgregarReservaComponent);

    // Opcional: Puedes suscribirte a eventos del modal si lo necesitas.
    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes realizar acciones después de cerrar el modal si es necesario.
    });
  }
}
