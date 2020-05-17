import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesEnviadosPageRoutingModule } from './mensajes-enviados-routing.module';

import { MensajesEnviadosPage } from './mensajes-enviados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesEnviadosPageRoutingModule
  ],
  declarations: [MensajesEnviadosPage]
})
export class MensajesEnviadosPageModule {}
