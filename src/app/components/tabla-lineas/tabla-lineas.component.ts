import { Component } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-tabla-lineas',
  templateUrl: './tabla-lineas.component.html',
  styleUrls: ['./tabla-lineas.component.css']
})
export class TablaLineasComponent {

  tabla: any[] | undefined= [];

  constructor(private registroLinsiService:RegistroLinsiService) {}

  async ngAfterViewInit(): Promise<void> {
    await this.armarTablaLineas();
    setTimeout(() => {
      this.initDataTable();
    }, 0);
  }

  async armarTablaLineas(): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarTablaLineas();
      this.tabla = response;
    } catch (error) {
    }
  }

  initDataTable(): void {
    
    $('#tablaLineas').DataTable({
      language: {
          url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      columns: [
        { searchable: false }, 
          { searchable: false }, // Columna 2 - No se permitirá la búsqueda
          { searchable: false } // Columna 3 - No se permitirá la búsqueda
      ],
      columnDefs: [
          { targets: [1,2], orderable: false }
      ],
      lengthMenu: [5, 10, 25, 50], // Modificar las opciones de cantidad de registros
      pageLength: 10, // Cantidad de registros mostrados por página por defecto
  });
    
  }
}
