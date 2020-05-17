import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsvAlumnoPageRoutingModule } from './csv-alumno-routing.module';

import { CsvAlumnoPage } from './csv-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsvAlumnoPageRoutingModule
  ],
  declarations: [CsvAlumnoPage]
})
export class CsvAlumnoPageModule {}
