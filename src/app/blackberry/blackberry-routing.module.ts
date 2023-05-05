import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackberryPage } from './blackberry.page';

const routes: Routes = [
  {
    path: '',
    component: BlackberryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackberryPageRoutingModule {}
