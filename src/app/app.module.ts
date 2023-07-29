import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalAdminComponent } from './components/principal-admin/principal-admin.component';
import { PrincipalUserComponent } from './components/principal-user/principal-user.component';
import { HomeComponent } from './components/home/home.component';
import { CabeceraAdminComponent } from './components/cabecera-admin/cabecera-admin.component';
import { CabeceraUserComponent } from './components/cabecera-user/cabecera-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsistenciaBecarioComponent } from './components/asistencia-becario/asistencia-becario.component';
import { TablaBecarioLineaComponent } from './components/tabla-becario-linea/tabla-becario-linea.component';
import { ListadoBecariosComponent } from './components/listado-becarios/listado-becarios.component';
import { TablaBecariosComponent } from './components/tabla-becarios/tabla-becarios.component';
import { ListadoLineasComponent } from './components/listado-lineas/listado-lineas.component';
import { TablaLineasComponent } from './components/tabla-lineas/tabla-lineas.component';
import { GabineteComponent } from './components/gabinete/gabinete.component';
import { ReservasPendientesComponent } from './components/reservas-pendientes/reservas-pendientes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ModalAgregarReservaComponent } from './components/modal-agregar-reserva/modal-agregar-reserva.component';
import { TablaAsistenciasBecarioComponent } from './components/tabla-asistencias-becario/tabla-asistencias-becario.component';
import { DetallesBecarioComponent } from './components/detalles-becario/detalles-becario.component';
import { BecarioDatosAcademicosComponent } from './components/becario-datos-academicos/becario-datos-academicos.component';
import { BecarioDatosPersonalesComponent } from './components/becario-datos-personales/becario-datos-personales.component';
import { BecarioProyectosAsignadosComponent } from './components/becario-proyectos-asignados/becario-proyectos-asignados.component';
import { ModalVerProyectosComponent } from './components/modal-ver-proyectos/modal-ver-proyectos.component';
import { DataSharingService } from './services/data-sharing-service.service';
import { DetalleProyectoComponent } from './components/detalle-proyecto/detalle-proyecto.component';
import { ModalAsistenciasBecarioComponent } from './components/modal-asistencias-becario/modal-asistencias-becario.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ModalDetallesContactoComponent } from './components/modal-detalles-contacto/modal-detalles-contacto.component';
import { ModalDetalleReservaComponent } from './components/modal-detalle-reserva/modal-detalle-reserva.component';
import { ModalRechazarReservaComponent } from './components/modal-rechazar-reserva/modal-rechazar-reserva.component';
import { ModalBecariosProyectoComponent } from './components/modal-becarios-proyecto/modal-becarios-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalAdminComponent,
    PrincipalUserComponent,
    HomeComponent,
    CabeceraAdminComponent,
    CabeceraUserComponent,
    FooterComponent,
    AsistenciaBecarioComponent,
    TablaBecarioLineaComponent,
    ListadoBecariosComponent,
    TablaBecariosComponent,
    ListadoLineasComponent,
    TablaLineasComponent,
    GabineteComponent,
    ReservasPendientesComponent,
    CalendarioComponent,
    ModalAgregarReservaComponent,
    TablaAsistenciasBecarioComponent,
    DetallesBecarioComponent,
    BecarioDatosPersonalesComponent,
    BecarioDatosAcademicosComponent,
    BecarioProyectosAsignadosComponent,
    ModalVerProyectosComponent,
    DetalleProyectoComponent,
    ModalAsistenciasBecarioComponent,
    ModalDetallesContactoComponent,
    ModalDetalleReservaComponent,
    ModalRechazarReservaComponent,
    ModalBecariosProyectoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }}}),
    AppRoutingModule,
    CommonModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
