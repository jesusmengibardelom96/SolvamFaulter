import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarProfesorPageRoutingModule } from './eliminar-profesor-routing.module';

import { EliminarProfesorPage } from './eliminar-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarProfesorPageRoutingModule
  ],
  declarations: [EliminarProfesorPage]
})
export class EliminarProfesorPageModule {}
