import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsvAlumnoPage } from './csv-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: CsvAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsvAlumnoPageRoutingModule {}
