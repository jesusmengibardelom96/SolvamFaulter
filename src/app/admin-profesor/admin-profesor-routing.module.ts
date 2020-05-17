import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminProfesorPage } from './admin-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProfesorPageRoutingModule {}
