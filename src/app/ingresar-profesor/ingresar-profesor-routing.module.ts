import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarProfesorPage } from './ingresar-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarProfesorPageRoutingModule {}
