import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';

@Component({
  selector: 'app-modal-detalles-contacto',
  templateUrl: './modal-detalles-contacto.component.html',
  styleUrls: ['./modal-detalles-contacto.component.css'],
})
export class ModalDetallesContactoComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private dataSharingService: DataSharingService,
    private registroLinsiService: RegistroLinsiService
  ) {}
  receivedData: any;

  datos: any;

  onCloseModal(): void {
    this.activeModal.close();
  }

  async ngOnInit(): Promise<void> {
    this.datos = await this.dataSharingService.getData();
  }
}
