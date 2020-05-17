import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarProfesorPageRoutingModule } from './ingresar-profesor-routing.module';

import { IngresarProfesorPage } from './ingresar-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarProfesorPageRoutingModule
  ],
  declarations: [IngresarProfesorPage]
})
export class IngresarProfesorPageModule {}
