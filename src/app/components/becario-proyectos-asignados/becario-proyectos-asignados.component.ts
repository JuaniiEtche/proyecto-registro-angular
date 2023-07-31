import { Component } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-becario-proyectos-asignados',
  templateUrl: './becario-proyectos-asignados.component.html',
  styleUrls: ['./becario-proyectos-asignados.component.css'],
})
export class BecarioProyectosAsignadosComponent {
  proyectos: any;

  constructor(
    private registroLinsiService: RegistroLinsiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const idPersona = params['idPersona'];
      this.armarTablaProyectos(idPersona);
    });
  }

  async armarTablaProyectos(idPersona: number): Promise<void> {
    try {
      const response: any =
        await this.registroLinsiService.cargarProyectosAsignados(idPersona);
      this.proyectos = response;
    } catch (error) {}
  }
}
