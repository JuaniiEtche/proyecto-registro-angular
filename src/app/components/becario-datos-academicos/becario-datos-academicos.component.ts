import { Component } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-becario-datos-academicos',
  templateUrl: './becario-datos-academicos.component.html',
  styleUrls: ['./becario-datos-academicos.component.css'],
})
export class BecarioDatosAcademicosComponent {
  datos: any;

  constructor(
    private registroLinsiService: RegistroLinsiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const idPersona = params['idPersona'];
      this.armarDatosPersonales(idPersona);
    });
  }

  async armarDatosPersonales(idPersona: number): Promise<void> {
    try {
      const response: any =
        await this.registroLinsiService.cargarDatosAcademicos(idPersona);
      this.datos = response;
    } catch (error) {}
  }
}
