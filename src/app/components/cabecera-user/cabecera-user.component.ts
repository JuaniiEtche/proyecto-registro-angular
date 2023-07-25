import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-user',
  templateUrl: './cabecera-user.component.html',
  styleUrls: ['./cabecera-user.component.css']
})
export class CabeceraUserComponent {

  constructor(private router:Router){

  }

  cerrarSesion():void{
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    this.router.navigate([""])
  }

}
