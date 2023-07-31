import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';

@Component({
  selector: 'app-modal-detalle-reserva',
  templateUrl: './modal-detalle-reserva.component.html',
  styleUrls: ['./modal-detalle-reserva.component.css'],
})
export class ModalDetalleReservaComponent {
  selectedEvento: any = {};
  fechaFormateada: any;
  horaMinutos: any;
  horaMinutos2: any;
  profesor: any;
  departamento: any;
  telefono: any;
  email: any;

  imagenEditar: any = '../assets/images/editar-logo.png';

  constructor(
    public activeModal: NgbActiveModal,
    private dataSharingService: DataSharingService
  ) {}
  receivedData: any;

  async ngOnInit(): Promise<void> {
    this.selectedEvento = await this.dataSharingService.getData();
    await this.cargarDatos();
  }

  async cargarDatos() {
    this.departamento =
      this.selectedEvento['event']['_def']['extendedProps']['description'];
    this.profesor =
      this.selectedEvento['event']['_def']['extendedProps']['professor'];
    this.telefono =
      this.selectedEvento['event']['_def']['extendedProps']['telefono'];
    this.email = this.selectedEvento['event']['_def']['extendedProps']['email'];

    const fechaInicio = new Date(this.selectedEvento.event.start);
    const fechaFin = new Date(this.selectedEvento.event.end);

    const horas = fechaInicio.getHours();
    const minutos = fechaInicio.getMinutes();
    this.horaMinutos =
      ('0' + horas).slice(-2) + ':' + ('0' + minutos).slice(-2);

    const horas2 = fechaFin.getHours();
    const minutos2 = fechaFin.getMinutes();
    this.horaMinutos2 =
      ('0' + horas2).slice(-2) + ':' + ('0' + minutos2).slice(-2);

    const fechaHora = new Date(this.selectedEvento.event.start);

    const opcionesFecha: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    this.fechaFormateada = fechaHora.toLocaleDateString('es-ES', opcionesFecha);
  }

  onCloseModal(): void {
    this.activeModal.close();
  }
}
