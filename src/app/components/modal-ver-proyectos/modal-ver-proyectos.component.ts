import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';

@Component({
  selector: 'app-modal-ver-proyectos',
  templateUrl: './modal-ver-proyectos.component.html',
  styleUrls: ['./modal-ver-proyectos.component.css']
})
export class ModalVerProyectosComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private dataSharingService: DataSharingService, private registroLinsiService: RegistroLinsiService) {}
  receivedData: any;
  
  tabla: any[] | undefined= [];

  registrarReserva(): void {

    this.activeModal.close();
  }

  onCloseModal(): void {

    this.activeModal.close();
  }

  async ngOnInit(): Promise<void> {
    this.receivedData = await this.dataSharingService.getData();
    await this.armarTablaProyectos();
  }

  // async ngAfterViewInit(): Promise<void> {
  //   await this.armarTablaProyectos();
  //   setTimeout(() => {
  //     this.initDataTable();
  //   }, 0);
  // }


  async armarTablaProyectos(): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarTablaProyectos(this.receivedData);
      this.tabla = response;
    } catch (error) {
    }
  }

}


