import { Component } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-becario-datos-personales',
  templateUrl: './becario-datos-personales.component.html',
  styleUrls: ['./becario-datos-personales.component.css']
})
export class BecarioDatosPersonalesComponent {

  resultado: any[] | undefined = undefined;

  nombreApellido:any;
  dni:any;
  telefono:any;
  legajo:any;
  email:any;


  constructor( 
    private registroLinsiService:RegistroLinsiService,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const idPersona = params['idPersona'];
      this.armarDatosPersonales(idPersona);    
    });
  }

  async armarDatosPersonales(idPersona:number): Promise<void> {
    try {
      const response: any = await this.registroLinsiService.cargarDatosPersonales(idPersona);
      this.resultado = response;
      this.nombreApellido=response.nombre + " "+ response.apellido;
      this.dni=response.dni;
      this.legajo=response.legajo;
      this.email=response.email;
      this.telefono=response.numTelefono;
    } catch (error) {
    }
  }
}
