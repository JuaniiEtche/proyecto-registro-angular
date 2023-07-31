import { Component } from '@angular/core';

@Component({
  selector: 'principal-admin',
  templateUrl: './principal-admin.component.html',
  styleUrls: ['./principal-admin.component.css'],
})
export class PrincipalAdminComponent {
  nombreUsuario: string | null;

  constructor() {
    this.nombreUsuario = localStorage.getItem('usuario');
  }

  getNombreUsuario() {
    return this.nombreUsuario;
  }
}
