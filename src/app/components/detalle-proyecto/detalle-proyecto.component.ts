import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent {
  constructor(private route:ActivatedRoute, private registroLinsiService:RegistroLinsiService){}
  idProyecto:number=0;
  datos:any;
  async ngOnInit() { //Se ejecuta cuando se cargue el componente
    this.route.queryParams.subscribe(params => {
      this.idProyecto = params['idProyecto'];
    });
    await this.cargarDatosProyecto(this.idProyecto);
  }

  async cargarDatosProyecto(idProyecto:number): Promise<void> {
    try {
      const response = await this.registroLinsiService.cargarProyectosId(idProyecto);
      this.datos = response;
    } catch (error) {
    }
    
  }
}