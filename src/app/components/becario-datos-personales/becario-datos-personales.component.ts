import { Component } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-becario-datos-personales',
  templateUrl: './becario-datos-personales.component.html',
  styleUrls: ['./becario-datos-personales.component.css'],
})
export class BecarioDatosPersonalesComponent {
  idPersona: any;
  nombre: any;
  apellido: any;
  dni: any;
  numTelefono: any;
  email: any;
  legajo: any;
  nombreOriginal: any;
  apellidoOriginal: any;
  dniOriginal: any;
  numTelefonoOriginal: any;
  emailOriginal: any;
  legajoOriginal: any;
  resultado: any[] | undefined = undefined;
  editandoPersonales: boolean = false;

  constructor(
    private registroLinsiService: RegistroLinsiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.idPersona = params['idPersona'];
      this.cargarDatosPersonales(this.idPersona);
    });
  }

  async cargarDatosPersonales(idPersona: number): Promise<void> {
    try {
      const response: any =
      await this.registroLinsiService.cargarDatosPersonales(idPersona);
      this.resultado = response;
      this.nombre = response.nombre;
      this.apellido = response.apellido;
      this.dni = response.dni;
      this.legajo = response.legajo;
      this.numTelefono = response.numTelefono;
      this.email = response.email;
      this.nombreOriginal = response.nombre;
      this.apellidoOriginal = response.apellido;
      this.dniOriginal = response.dni;
      this.legajoOriginal = response.legajo;
      this.numTelefonoOriginal = response.numTelefono;
      this.emailOriginal = response.email;
    } catch (error) {}
  }

  cancelarEdicionDatosPersonales() {
    this.nombre = this.nombreOriginal;
    this.apellido = this.apellidoOriginal;
    this.dni = this.dniOriginal;
    this.legajo = this.legajoOriginal;
    this.numTelefono = this.numTelefonoOriginal;
    this.email = this.emailOriginal;
    this.editandoPersonales = false;
  }

  editarDatosPersonales() {
    if (this.editandoPersonales) {
      this.guardarDatosPersonales();
      this.editandoPersonales = false;
    } else {
      // Activa el modo de edición
      this.editandoPersonales = true;
    }
  }

  async guardarDatosPersonales() {
    try {
      const response = await this.registroLinsiService.actualizarDatosPersonales(
        this.idPersona,
        this.nombre,
        this.apellido,
        this.dni,
        this.numTelefono,
        this.email,
        this.legajo
      );
      console.log(response);
      if (response && response.exitoso) {
        console.log('Datos personales actualizados con éxito');
      } else {
        console.error('Error');
      }
    } catch (error) {
      console.error('Error al actualizar datos personales', error);
    }
  

    this.editandoPersonales = false;
  }
}