import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplehistoryPage } from './applehistory.page';

const routes: Routes = [
  {
    path: '',
    component: ApplehistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplehistoryPageRoutingModule {}
