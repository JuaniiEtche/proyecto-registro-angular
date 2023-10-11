import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-agregar-reserva',
  templateUrl: './modal-agregar-reserva.component.html',
  styleUrls: ['./modal-agregar-reserva.component.css'],
})
export class ModalAgregarReservaComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalAgregarReservaComponent>,
    private registroLinsiService: RegistroLinsiService,
    private snackBar: MatSnackBar
  ) {}
  agregarNuevoProfesor: boolean = true;
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
  async registrarReserva() {
    this.gabinetesAMandar = await Object.keys(this.gabinetesSeleccionados);

    if (this.fecha == null) {
      const mensaje = 'No se ha introducido una fecha valida';
      const accion = 'Aceptar';
      this.openSnackBar(mensaje, accion);
      this.gabinetesSeleccionados = [];
      return;
    }

    if (this.horaInicio == null) {
      const mensaje = 'No se ha introducido una hora de inicio valida';
      const accion = 'Aceptar';
      this.openSnackBar(mensaje, accion);
      this.gabinetesSeleccionados = [];
      return;
    }

    if (this.horaFin == null) {
      const mensaje = 'No se ha introducido una hora de fin valida';
      const accion = 'Aceptar';
      this.openSnackBar(mensaje, accion);
      this.gabinetesSeleccionados = [];
      return;
    }

    const horaInicioParsed = new Date(`2023-01-01T${this.horaInicio}`);
    const horaFinParsed = new Date(`2023-01-01T${this.horaFin}`);

    if (horaFinParsed <= horaInicioParsed) {
      const mensaje = 'La hora de fin debe ser mayor a la hora de inicio';
      const accion = 'Aceptar';
      this.openSnackBar(mensaje, accion);
      this.gabinetesSeleccionados = [];
      return;
    }
    if (this.gabinetesAMandar.length == 0) {
      const mensaje = 'No se han seleccionado gabinetes a reservar';
      const accion = 'Aceptar';
      this.openSnackBar(mensaje, accion);
      return;
    }

    if (this.departamento == null) {
      const mensaje = 'No se ha seleccionado un departamento valido';
      const accion = 'Aceptar';
      this.openSnackBar(mensaje, accion);
      return;
    }

    if (this.materia == null) {
      const mensaje = 'No se ha seleccionado una materia valida';
      const accion = 'Aceptar';
      this.openSnackBar(mensaje, accion);
      return;
    }

    if (this.profesor == null) {
      const mensaje = 'No se ha seleccionado un profesor';
      const accion = 'Aceptar';
      this.openSnackBar(mensaje, accion);
      return;
    }
    const response = await this.registroLinsiService.agregarReserva(
      this.fecha,
      this.horaInicio,
      this.horaFin,
      this.materia,
      this.departamento,
      this.profesor?.split(' ')[0],
      this.profesor?.split(' ')[1],
      this.gabinetesAMandar
    );
    this.departamentos = response;

    window.location.reload();
  }

  agregarProfesor(){
  this.agregarNuevoProfesor = !this.agregarNuevoProfesor;

    // Crear un nuevo objeto de tipo profesor
    const profesor = {
      nombre: '',
      apellido: '',
      email: '',
      telefono: ''
    };

}

  onCloseModal(): void {
    this.dialogRef.close();
  }

  async cargarDepartamentos() {
    const response = await this.registroLinsiService.cargarDepartamentos();
    this.departamentos = response;
  }

  async cargarMaterias(nombreDepartamento: any) {
    this.profesor = null;
    // Buscar el departamento por el nombre
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
      // Si el gabinete ya está seleccionado, lo eliminamos del array
      this.gabinetesAMandar.splice(index, 1);
      this.contadorEquipos -= g.cantidadEquipos;
    } else {
      // Si el gabinete no está seleccionado, lo agregamos al array
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
