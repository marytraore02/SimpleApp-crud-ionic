import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEmpooyeePage } from './update-empooyee.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEmpooyeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEmpooyeePageRoutingModule {}
