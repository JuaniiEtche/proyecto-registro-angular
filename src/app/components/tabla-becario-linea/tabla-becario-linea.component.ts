import { Component, OnInit } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import * as $ from 'jquery';
import { ModalEliminarBecarioComponent } from '../modal-eliminar-becario/modal-eliminar-becario.component';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-becario-linea',
  templateUrl: './tabla-becario-linea.component.html',
  styleUrls: ['./tabla-becario-linea.component.css']
})
export class TablaBecarioLineaComponent {

  tablas: any[] | undefined= [];
  persona: any;
  constructor(private registroLinsiService:RegistroLinsiService,private modalService: NgbModal, private dataSharingService: DataSharingService ) {}

  async ngAfterViewInit(): Promise<void> {
    await this.obtenerDatos();
    setTimeout(() => {
      this.initDataTable();
    }, 0);
  }


  async obtenerDatos(): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarTablaLineaUsuario();
      this.tablas = response;
    } catch (error) {
    }
  }

  verDetallesBecario(idPersona: number): void {
    // Lógica para ver detalles de un becario
  }

  openEliminarUsuarioLinea(idPersona: number, nombreLinea: string, nombreBecario:string, apellidoBecario:string): void {
    const modalRef = this.modalService.open(ModalEliminarBecarioComponent);
    const dataToSend = {'id':idPersona,'nombreLinea':nombreLinea,'nombreBecario':nombreBecario,'apellidoBecario':apellidoBecario};
    this.dataSharingService.setData(dataToSend);
  }

 
  initDataTable(): void {
    $('.tablaBecario').DataTable({
      language: {
          url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      columns: [
        { searchable: false },
        { searchable: false },
        { searchable: false },
      ],
      columnDefs: [
          { targets: [2], orderable: false },
          { targets: [0,1], orderable: true }
      ],
      info: false,
      paging: false,
      searching: false
    });
  }

}
