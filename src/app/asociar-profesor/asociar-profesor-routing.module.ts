import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsociarProfesorPage } from './asociar-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: AsociarProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsociarProfesorPageRoutingModule {}
