import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMensajePage } from './ver-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: VerMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMensajePageRoutingModule {}
