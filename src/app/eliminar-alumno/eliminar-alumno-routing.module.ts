import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarAlumnoPage } from './eliminar-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarAlumnoPageRoutingModule {}
