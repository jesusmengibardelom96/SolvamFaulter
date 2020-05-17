import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMensajePageRoutingModule } from './ver-mensaje-routing.module';

import { VerMensajePage } from './ver-mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMensajePageRoutingModule
  ],
  declarations: [VerMensajePage]
})
export class VerMensajePageModule {}
