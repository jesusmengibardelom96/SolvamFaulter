import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarAlumnoPageRoutingModule } from './insertar-alumno-routing.module';

import { InsertarAlumnoPage } from './insertar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarAlumnoPageRoutingModule
  ],
  declarations: [InsertarAlumnoPage]
})
export class InsertarAlumnoPageModule {}
