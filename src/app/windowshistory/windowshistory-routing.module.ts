import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindowshistoryPage } from './windowshistory.page';

const routes: Routes = [
  {
    path: '',
    component: WindowshistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WindowshistoryPageRoutingModule {}
