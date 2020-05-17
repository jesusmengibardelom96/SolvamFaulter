import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarMatriculaPageRoutingModule } from './eliminar-matricula-routing.module';

import { EliminarMatriculaPage } from './eliminar-matricula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarMatriculaPageRoutingModule
  ],
  declarations: [EliminarMatriculaPage]
})
export class EliminarMatriculaPageModule {}
