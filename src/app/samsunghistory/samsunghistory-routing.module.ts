import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamsunghistoryPage } from './samsunghistory.page';

const routes: Routes = [
  {
    path: '',
    component: SamsunghistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamsunghistoryPageRoutingModule {}
