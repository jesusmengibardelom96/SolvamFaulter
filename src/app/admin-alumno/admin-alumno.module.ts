import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAlumnoPageRoutingModule } from './admin-alumno-routing.module';

import { AdminAlumnoPage } from './admin-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAlumnoPageRoutingModule
  ],
  declarations: [AdminAlumnoPage]
})
export class AdminAlumnoPageModule {}
