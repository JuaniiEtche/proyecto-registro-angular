import { Component } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import * as $ from 'jquery';
import 'datatables.net';
import { ModalDetallesContactoComponent } from '../modal-detalles-contacto/modal-detalles-contacto.component';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRechazarReservaComponent } from '../modal-rechazar-reserva/modal-rechazar-reserva.component';

@Component({
  selector: 'app-reservas-pendientes',
  templateUrl: './reservas-pendientes.component.html',
  styleUrls: ['./reservas-pendientes.component.css']
})
export class ReservasPendientesComponent {
  tablaPendiente: any[] | undefined = [];

  constructor(private registroLinsiService:RegistroLinsiService,private modalService: NgbModal, private dataSharingService: DataSharingService) {}

  async ngAfterViewInit(): Promise<void> {
    await this.armarTablaPendientes();
    setTimeout(() => {
      this.initDataTable();
    }, 0);
  }

  async armarTablaPendientes(): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarReservasPendientes();
      this.tablaPendiente = response;
      // console.log(response)
    } catch (error) {
    }

  }


  initDataTable(): void {
    
    $('#tablaPendientes').DataTable({
      language: {
          url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      columns: [
        { searchable: false },
        { searchable: true },
        { searchable: true },
        { searchable: false },
        { searchable: false },
        { searchable: false },
        { searchable: false }
      ],
      columnDefs: [
          { targets: [4,5,6], orderable: false }
      ],
      info: false,
      paging: false,
      searching: false,
      autoWidth:false
    });
  }


  openModalDatos(telefono:any,email:any){
    const modalRef = this.modalService.open(ModalDetallesContactoComponent);
    const dataToSend = {'telefono':telefono,'email':email};
    this.dataSharingService.setData(dataToSend);
  }
  openRechazarReserva(idReserva:number,apellidoDocente:string,nombreDocente:string,materia:string,fecha:any){
    const modalRef = this.modalService.open(ModalRechazarReservaComponent);
    const dataToSend = {'apellido':apellidoDocente,'nombre':nombreDocente,'materia':materia,'fecha':fecha,'id':idReserva};
    this.dataSharingService.setData(dataToSend);
  }


  aceptarReserva(idReserva:number){ 
    this.registroLinsiService.reservar(idReserva).then(()=>{
      window.location.reload();
    });
  }
}
