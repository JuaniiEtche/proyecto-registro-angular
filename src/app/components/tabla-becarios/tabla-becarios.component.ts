import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tabla-becarios',
  templateUrl: './tabla-becarios.component.html',
  styleUrls: ['./tabla-becarios.component.css']
})
export class TablaBecariosComponent implements AfterViewInit {
  tabla: any[] | undefined= [];

  constructor(private registroLinsiService: RegistroLinsiService) {}

  async ngAfterViewInit(): Promise<void> {
    await this.armarTablaBecarios();
    setTimeout(() => {
      this.initDataTable();
    }, 0);
  }

  async armarTablaBecarios(): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarTablaBecarios();
      this.tabla = response;
    } catch (error) {
    }
  }

  initDataTable(): void {
    $('#tablaBecariosA').DataTable({
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      columns: [
        { searchable: true },
        { searchable: false },
        { searchable: false },
        { searchable: false },
        { searchable: false },
        { searchable: false },
      ],
      columnDefs: [
        { targets: [5], orderable: false }
      ],
      lengthMenu: [5, 10, 25, 50], // Modificar las opciones de cantidad de registros
      pageLength: 10, // Cantidad de registros mostrados por página por defecto
    });
  }
}
