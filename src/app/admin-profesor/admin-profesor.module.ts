import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminProfesorPageRoutingModule } from './admin-profesor-routing.module';

import { AdminProfesorPage } from './admin-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminProfesorPageRoutingModule
  ],
  declarations: [AdminProfesorPage]
})
export class AdminProfesorPageModule {}
