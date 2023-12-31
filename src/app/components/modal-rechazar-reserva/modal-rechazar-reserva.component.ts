import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLinkActive } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';

@Component({
  selector: 'app-modal-rechazar-reserva',
  templateUrl: './modal-rechazar-reserva.component.html',
  styleUrls: ['./modal-rechazar-reserva.component.css'],
})
export class ModalRechazarReservaComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public activeModal: NgbActiveModal,
    private dataSharingService: DataSharingService,
    private registroLinsiService: RegistroLinsiService
  ) {}
  receivedData: any;

  reserva: any;

  onCloseModal(): void {
    this.activeModal.close();
  }

  async ngOnInit(): Promise<void> {
    this.reserva = await this.dataSharingService.getData();
  }

  rechazar(idReserva: number) {
    this.registroLinsiService.rechazarReservar(idReserva).then(() => {
      window.location.reload();
    });
  }
}
