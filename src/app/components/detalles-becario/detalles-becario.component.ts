import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-becario',
  templateUrl: './detalles-becario.component.html',
  styleUrls: ['./detalles-becario.component.css'],
})
export class DetallesBecarioComponent {
  apellido: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.apellido = params['apellido'];
    });
  }

  getApellido() {
    return this.apellido;
  }
}
