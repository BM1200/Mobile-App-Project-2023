import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BberryhistoryPage } from './bberryhistory.page';

const routes: Routes = [
  {
    path: '',
    component: BberryhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BberryhistoryPageRoutingModule {}
