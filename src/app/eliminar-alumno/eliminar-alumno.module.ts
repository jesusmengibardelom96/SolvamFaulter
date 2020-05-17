import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarAlumnoPageRoutingModule } from './eliminar-alumno-routing.module';

import { EliminarAlumnoPage } from './eliminar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarAlumnoPageRoutingModule
  ],
  declarations: [EliminarAlumnoPage]
})
export class EliminarAlumnoPageModule {}
