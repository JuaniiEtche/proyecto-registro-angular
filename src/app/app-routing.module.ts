import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalAdminComponent } from './components/principal-admin/principal-admin.component';
import { PrincipalUserComponent } from './components/principal-user/principal-user.component';
import { HomeComponent } from './components/home/home.component';
import { AsistenciaBecarioComponent } from './components/asistencia-becario/asistencia-becario.component';
import { ListadoBecariosComponent } from './components/listado-becarios/listado-becarios.component';
import { ListadoLineasComponent } from './components/listado-lineas/listado-lineas.component';
import { GabineteComponent } from './components/gabinete/gabinete.component';
import { DetallesBecarioComponent } from './components/detalles-becario/detalles-becario.component'; // Juani le agregó la S a detalleS
import { DetalleProyectoComponent } from './components/detalle-proyecto/detalle-proyecto.component';
import { authGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'principal-admin',
    component: PrincipalAdminComponent,
    canActivate: [authGuard],
  },
  {
    path: 'principal-user',
    component: PrincipalUserComponent,
    canActivate: [authGuard],
  },
  {
    path: 'asistencia-becario',
    component: AsistenciaBecarioComponent,
    canActivate: [authGuard],
  },
  {
    path: 'listado-becarios',
    component: ListadoBecariosComponent,
    canActivate: [authGuard],
  },
  {
    path: 'listado-lineas',
    component: ListadoLineasComponent,
    canActivate: [authGuard],
  },
  { path: 'gabinete', component: GabineteComponent, canActivate: [authGuard] },
  {
    path: 'detalle-becario',
    component: DetallesBecarioComponent,
    canActivate: [authGuard],
  },
  {
    path: 'detalle-proyecto',
    component: DetalleProyectoComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
