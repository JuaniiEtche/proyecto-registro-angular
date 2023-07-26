import { Component } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-tabla-asistencias-becario',
  templateUrl: './tabla-asistencias-becario.component.html',
  styleUrls: ['./tabla-asistencias-becario.component.css']
})
export class TablaAsistenciasBecarioComponent {
  tabla: any[] | undefined= [];


  constructor(private registroLinsiService:RegistroLinsiService){

  }

  async ngAfterViewInit(): Promise<void> {
    await this.armarTablaAsistencias();
    setTimeout(() => {
      this.initDataTable();
    }, 0);
  }

  async armarTablaAsistencias(): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarTablaAsistencias();
      this.tabla = response;
    } catch (error) {
    }
  }

  initDataTable(): void {
    $('.tablaAsistencias').DataTable({
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      searching: false,

      columnDefs: [
          { targets: [1,2], orderable: false }
      ]
    });
  }
}
