import { Component } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-reservas-pendientes',
  templateUrl: './reservas-pendientes.component.html',
  styleUrls: ['./reservas-pendientes.component.css']
})
export class ReservasPendientesComponent {
  tablaPendiente: any[] | undefined = [];

  constructor(private registroLinsiService:RegistroLinsiService) {}

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
}
