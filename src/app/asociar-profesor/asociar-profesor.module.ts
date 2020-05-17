import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociarProfesorPageRoutingModule } from './asociar-profesor-routing.module';

import { AsociarProfesorPage } from './asociar-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociarProfesorPageRoutingModule
  ],
  declarations: [AsociarProfesorPage]
})
export class AsociarProfesorPageModule {}
