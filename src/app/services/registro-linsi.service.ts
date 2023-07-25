import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistroLinsiService {

  private ip : string = "http://localhost:8080"

  constructor(
    private http : HttpClient,
  ) { }

  auntenticar(usuario:string,clave:string){
    return this.http.post<any>(this.ip+'/public/authenticate',{ usuario, clave }).toPromise();
  }

  cargarTablaLineaUsuario(){
    const usuario = localStorage.getItem('usuario');

    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    return this.http.get<any[]>(this.ip+"/admin/user/"+usuario,{headers}).toPromise();
  }


  async cargarTablaBecarios(){

    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    let listadoPersonas = await this.http.get<any[]>(this.ip+"/admin/personas",{headers}).toPromise()

    return listadoPersonas;
  }


  cargarTablaLineas(){

    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    return this.http.get<any[]>(this.ip+"/admin/lineaInvestigacion",{headers}).toPromise();
  }

  cargarReservasConfirmadas(){

    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    return this.http.get<any[]>(this.ip+"/admin/reservas-confirmadas",{headers}).toPromise();
  }

  

  cargarReservasPendientes(){

    const tokenJWT = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    return this.http.get<any[]>(this.ip+"/admin/reservas-pendientes",{headers}).toPromise();
  }

  cargarTablaAsistencias(){

    const tokenJWT = localStorage.getItem('token');
    const usuario = localStorage.getItem('usuario');


    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    return this.http.get<any[]>(this.ip+"/user/asistencia/"+usuario,{headers}).toPromise();
  }

  cargarDatosAcademicos(idPersona:Number){

    const tokenJWT = localStorage.getItem('token');


    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    return this.http.get<any[]>(this.ip+"/admin/datosacademicos/"+idPersona,{headers}).toPromise();
  }

  cargarDatosPersonales(idPersona:Number){

    const tokenJWT = localStorage.getItem('token');


    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    return this.http.get<any[]>(this.ip+"/admin/personas/"+idPersona,{headers}).toPromise();
  
  }

  cargarProyectosAsignados(idPersona:Number){

    const tokenJWT = localStorage.getItem('token');


    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenJWT}`
    });

    return this.http.get<any[]>(this.ip+"/admin/proyecto/"+idPersona,{headers}).toPromise();
  
  }
  
  
}
