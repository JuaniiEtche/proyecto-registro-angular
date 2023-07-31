import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistroLinsiService {
  private ip: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  auntenticar(usuario: string, clave: string) {
    return this.http
      .post<any>(this.ip + '/public/authenticate', { usuario, clave })
      .toPromise();
  }

  reservar(idReserva: number) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .post<any>(this.ip + '/admin/reserva/' + idReserva, {}, { headers })
      .toPromise();
  }

  rechazarReservar(idReserva: number) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .post<any>(
        this.ip + '/admin/reserva/rechazar/' + idReserva,
        {},
        { headers }
      )
      .toPromise();
  }

  eliminarBecarioLinea(idPersona: number, nombreLinea: string) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .delete<any>(
        this.ip + '/admin/usuarioxlinea/' + idPersona + '/' + nombreLinea,
        { headers }
      )
      .toPromise();
  }

  cargarTablaLineaUsuario() {
    const usuario = localStorage.getItem('usuario');

    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/user/' + usuario, { headers })
      .toPromise();
  }

  async cargarTablaBecarios() {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    let listadoPersonas = await this.http
      .get<any[]>(this.ip + '/admin/personas', { headers })
      .toPromise();

    return listadoPersonas;
  }

  cargarTablaLineas() {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/lineaInvestigacion', { headers })
      .toPromise();
  }

  cargarReservasConfirmadas() {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/reservas-confirmadas', { headers })
      .toPromise();
  }

  cargarTablaProyectos(lineaNombre: any) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/proyectos/' + lineaNombre.nombreProyecto, {
        headers,
      })
      .toPromise();
  }

  cargarReservasPendientes() {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/reservas-pendientes', { headers })
      .toPromise();
  }

  cargarTablaAsistencias() {
    const tokenJWT = localStorage.getItem('token');
    const usuario = localStorage.getItem('usuario');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/user/asistencia/' + usuario, { headers })
      .toPromise();
  }

  cargarDatosAcademicos(idPersona: Number) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/datosacademicos/' + idPersona, { headers })
      .toPromise();
  }

  cargarDatosPersonales(idPersona: Number) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/personas/' + idPersona, { headers })
      .toPromise();
  }

  cargarProyectosAsignados(idPersona: Number) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/proyecto/' + idPersona, { headers })
      .toPromise();
  }

  cargarProyectosId(idProyecto: number) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/proyecto/detalle/' + idProyecto, {
        headers,
      })
      .toPromise();
  }

  cargarAsistenciasBecario(idBecario: number) {
    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(this.ip + '/admin/asistencia/' + idBecario, { headers })
      .toPromise();
  }

  cargarBecarioProyecto(nombreLinea: string, nombreProyecto: string) {
    //Para Modal Becario Proyecto que se usa para editar integrantes

    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`,
    });

    return this.http
      .get<any[]>(
        this.ip +
          '/admin/lineaInvestigacion/' +
          nombreLinea +
          '/' +
          nombreProyecto,
        { headers }
      )
      .toPromise();
  }
}
