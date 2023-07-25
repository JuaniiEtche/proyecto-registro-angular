import { Component, OnInit } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-tabla-becario-linea',
  templateUrl: './tabla-becario-linea.component.html',
  styleUrls: ['./tabla-becario-linea.component.css']
})
export class TablaBecarioLineaComponent {

  tablas: any[] | undefined= [];

  constructor(private registroLinsiService:RegistroLinsiService) {}

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

  eliminarUsuarioLinea(idPersona: number, nombreLinea: string): void {
    // Lógica para eliminar un usuario de una línea
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
