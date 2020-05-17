import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarMatriculaPage } from './eliminar-matricula.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarMatriculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarMatriculaPageRoutingModule {}
