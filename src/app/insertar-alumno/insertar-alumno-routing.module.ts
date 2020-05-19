import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarAlumnoPage } from './insertar-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarAlumnoPageRoutingModule {}
