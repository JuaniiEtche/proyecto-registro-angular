import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent {
  constructor(
    private registroLinsiService: RegistroLinsiService,
    private snackBar: MatSnackBar
  ) {}
  fecha: Date | null = null;
  horaInicio: string | null = null;
  horaFin: string | null = null;
  gabinetes: any[] | undefined = [];
  gabinetesSeleccionados: any[] = [];
  departamento: string | null = null;
  materia: string | null = null;
  profesor: string | null = null;
  
  contadorEquipos: number = 0;

  departamentos: any[] | undefined = [];
  materias: any[] | undefined = [];
  profesores: any[] | undefined = [];

  gabinetesAMandar: string[] = [];

  async ngOnInit(): Promise<void> {
    await this.cargarDepartamentos();
    await this.cargarGabinetes();
  }

  async cargarDepartamentos() {
    const response = await this.registroLinsiService.cargarDepartamentos();
    this.departamentos = response;
  }

  async cargarMaterias(nombreDepartamento: any) {
    this.profesor = null;
    const departamentoEncontrado = this.departamentos?.find(
      (departamento) => departamento.nombre === nombreDepartamento
    );

    this.materias = departamentoEncontrado.nombreMaterias;
  }

  async cargarProfesores(materia: any) {
    const response = await this.registroLinsiService.cargarProfesores(materia);
    this.profesores = response;
  }

  async cargarGabinetes() {
    const response = await this.registroLinsiService.cargarGabinetes();
    this.gabinetes = response;
  }

  cambiarContador(g: any) {
    const index = this.gabinetesAMandar.indexOf(g.nombre);

    if (index !== -1) {
      this.gabinetesAMandar.splice(index, 1);
      this.contadorEquipos -= g.cantidadEquipos;
    } else {
      this.gabinetesAMandar.push(g.nombre);
      this.contadorEquipos += g.cantidadEquipos;
    }
  }

  openSnackBar(message: string, action: string) {
    let config = new MatSnackBarConfig();
    config.duration = 2000;
    config.verticalPosition = 'top';
    this.snackBar.open(message, action, config);
  }
  }