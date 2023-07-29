import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-becarios-proyecto',
  templateUrl: './modal-becarios-proyecto.component.html',
  styleUrls: ['./modal-becarios-proyecto.component.css'],
})
export class ModalBecariosProyectoComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private dataSharingService: DataSharingService,
    private registroLinsiService: RegistroLinsiService
  ) {}
  receivedData: any;
  datos: any[] | undefined = [];
  

  onCloseModal(): void {
    this.activeModal.close(); // Cierra el Modal
  }

  async ngOnInit(): Promise<void> {
    this.receivedData = await this.dataSharingService.getData();
    await this.armarEditarIntegrantes(this.receivedData); 
    setTimeout(() => {
      this.initDataTable();
    }, 0);
  }

  async armarEditarIntegrantes(datos: any): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarBecarioProyecto(datos.nombreLinea, datos.nombreProyecto);
      this.datos = Array.isArray(response) ? response : [response];
    } catch (error) {
      // Manejar el error aquí si es necesario
    }
  }


  initDataTable(): void {
    $('#tablaLineas').DataTable({
      language: {
          url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      columns: [
        { searchable: true },
        { searchable: false },
        { searchable: false },
        { searchable: false },
      ],
      columnDefs: [
          { targets: [3], orderable: false },
          { targets: [0,1,2], orderable: true }
      ],
    });
  }

}
  