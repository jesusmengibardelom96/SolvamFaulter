import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'admin-alumno',
    loadChildren: () => import('./admin-alumno/admin-alumno.module').then( m => m.AdminAlumnoPageModule)
  },
  {
    path: 'csv-alumno',
    loadChildren: () => import('./csv-alumno/csv-alumno.module').then( m => m.CsvAlumnoPageModule)
  },
  {
    path: 'eliminar-matricula',
    loadChildren: () => import('./eliminar-matricula/eliminar-matricula.module').then( m => m.EliminarMatriculaPageModule)
  },
  {
    path: 'eliminar-alumno',
    loadChildren: () => import('./eliminar-alumno/eliminar-alumno.module').then( m => m.EliminarAlumnoPageModule)
  },
  {
    path: 'asociar-profesor',
    loadChildren: () => import('./asociar-profesor/asociar-profesor.module').then( m => m.AsociarProfesorPageModule)
  },
  {
    path: 'eliminar-profesor',
    loadChildren: () => import('./eliminar-profesor/eliminar-profesor.module').then( m => m.EliminarProfesorPageModule)
  },
  {
    path: 'ingresar-profesor',
    loadChildren: () => import('./ingresar-profesor/ingresar-profesor.module').then( m => m.IngresarProfesorPageModule)
  },
  {
    path: 'admin-profesor',
    loadChildren: () => import('./admin-profesor/admin-profesor.module').then( m => m.AdminProfesorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ver-mensaje',
    loadChildren: () => import('./ver-mensaje/ver-mensaje.module').then( m => m.VerMensajePageModule)
  },
  {
    path: 'mensajes-enviados',
    loadChildren: () => import('./mensajes-enviados/mensajes-enviados.module').then( m => m.MensajesEnviadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
