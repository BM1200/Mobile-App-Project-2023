import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WindowshistoryPageRoutingModule } from './windowshistory-routing.module';

import { WindowshistoryPage } from './windowshistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WindowshistoryPageRoutingModule
  ],
  declarations: [WindowshistoryPage]
})
export class WindowshistoryPageModule {}
