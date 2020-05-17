import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAlumnoPage } from './admin-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAlumnoPageRoutingModule {}
