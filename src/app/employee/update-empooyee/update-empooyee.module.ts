import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEmpooyeePageRoutingModule } from './update-empooyee-routing.module';

import { UpdateEmpooyeePage } from './update-empooyee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEmpooyeePageRoutingModule
  ],
  declarations: [UpdateEmpooyeePage]
})
export class UpdateEmpooyeePageModule {}
