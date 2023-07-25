import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';




@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  @ViewChild('calendarEl') calendarEl!: ElementRef;
  calendar!: Calendar;
  eventos: any[] = [];

  constructor(private registroLinsiService:RegistroLinsiService){

  }

  ngOnInit() {

    this.registroLinsiService.cargarReservasConfirmadas()
    .then((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        const fechaInicio = data[i]['fecha'] + ' ' + data[i]['horaInicio'];
        const fechaFin = data[i]['fecha'] + ' ' + data[i]['horaFin'];
  
        const fechaInicioParts = fechaInicio.split(' ');
        const fechaPartesInicio = fechaInicioParts[0].split('-');
        const horaPartesInicio = fechaInicioParts[1].split(':');
        const fechaInicioObj = new Date(
          parseInt(fechaPartesInicio[0]),
          parseInt(fechaPartesInicio[1]) - 1,
          parseInt(fechaPartesInicio[2]),
          parseInt(horaPartesInicio[0]),
          parseInt(horaPartesInicio[1]),
          parseInt(horaPartesInicio[2])
        );
  
        const fechaFinParts = fechaFin.split(' ');
        const fechaPartesFin = fechaFinParts[0].split('-');
        const horaPartesFin = fechaFinParts[1].split(':');
        const fechaFinObj = new Date(
          parseInt(fechaPartesFin[0]),
          parseInt(fechaPartesFin[1]) - 1,
          parseInt(fechaPartesFin[2]),
          parseInt(horaPartesFin[0]),
          parseInt(horaPartesFin[1]),
          parseInt(horaPartesFin[2])
        );
  
        const materia = data[i]['nombreMateria'];
        const descripcion = data[i]['nombreDepartamento'];
        const profesor = data[i]['nombreDocente'];
        const profesorApellido = data[i]['apellidoDocente'];
        const email = data[i]['email'];
        const telefono = data[i]['telefono'];
  
        const propiedad = {
          title: 'Materia: ' + materia,
          start: fechaInicioObj,
          end: fechaFinObj,
          description: descripcion,
          professor: profesor + ' ' + profesorApellido,
          email: email,
          telefono: telefono
        };
  
        this.eventos.push(propiedad);
      }
  
      this.calendar = new Calendar(this.calendarEl.nativeElement, {
        plugins: [dayGridPlugin],
        defaultView: 'dayGridMonth',
        events: this.eventos,
        eventClick: (info: any) => {
          this.mostrarDetallesEvento(info.event);
        },
        locale: 'es',
        displayEventTime: false
      });
  
      this.calendar.render();

    })
    .catch((response:any)=>{

    })
  }

  mostrarDetallesEvento(evento: any) {
    // Implementa la lógica para mostrar los detalles del evento
  }
   
}
