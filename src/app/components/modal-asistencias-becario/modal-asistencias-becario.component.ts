import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';

@Component({
  selector: 'app-modal-asistencias-becario',
  templateUrl: './modal-asistencias-becario.component.html',
  styleUrls: ['./modal-asistencias-becario.component.css'],
})
export class ModalAsistenciasBecarioComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private dataSharingService: DataSharingService,
    private registroLinsiService: RegistroLinsiService
  ) {}
  receivedData: any;
  tabla: any[] | undefined = [];

  async ngOnInit(): Promise<void> {
    this.receivedData = await this.dataSharingService.getData();
    await this.armarTablaAsistencias();
  }

  async armarTablaAsistencias(): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarAsistenciasBecario(
        this.receivedData.idBecario
      );
      this.tabla = response;
    } catch (error) {}
  }

  onCloseModal(): void {
    this.activeModal.close();
  }
}
