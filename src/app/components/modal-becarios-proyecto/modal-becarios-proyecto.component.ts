import { Component, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';

@Component({
  selector: 'app-modal-becarios-proyecto',
  templateUrl: './modal-becarios-proyecto.component.html',
  styleUrls: ['./modal-becarios-proyecto.component.css']
})
export class ModalBecariosProyectoComponent {
  constructor(public activeModal: NgbActiveModal, private dataSharingService: DataSharingService, private registroLinsiService: RegistroLinsiService) {}
  receivedData: any;
  datos: any[] = [];

  onCloseModal(): void {

    this.activeModal.close(); //Cierra el Modal
  }

  async ngOnInit(): Promise<void> {
    this.datos = await this.dataSharingService.getData();
    this.armarEditarIntegrantes();
  }

  async armarEditarIntegrantes(): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarBecarioProyecto(this.datos?lineaInvestigacion,this.datos.nombre);
      this.datos = response;
    } catch (error) {
    }
  }

}