import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cabecera-admin',
  templateUrl: './cabecera-admin.component.html',
  styleUrls: ['./cabecera-admin.component.css']
})
export class CabeceraAdminComponent {

  constructor(private router:Router){

  }

  nombre: string|null="";

  ngOnInit(): void {
    this.nombre = localStorage.getItem('usuario');
  }

  getNombreUsuario(){
    return this.nombre;
  }

  cerrarSesion():void{
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    this.router.navigate([""])
  }

}
