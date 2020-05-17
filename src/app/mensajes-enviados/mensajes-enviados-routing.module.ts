import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesEnviadosPage } from './mensajes-enviados.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesEnviadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesEnviadosPageRoutingModule {}
