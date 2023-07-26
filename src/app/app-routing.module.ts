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


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'principal-admin', component: PrincipalAdminComponent },
  { path: 'principal-user', component: PrincipalUserComponent},
  { path: 'asistencia-becario', component:AsistenciaBecarioComponent},
  { path: 'listado-becarios', component:ListadoBecariosComponent},
  { path: 'listado-lineas', component:ListadoLineasComponent},
  { path: 'gabinete', component: GabineteComponent},
  { path: 'detalle-becario',component:DetallesBecarioComponent},
  { path: 'detalle-proyecto',component:DetalleProyectoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
