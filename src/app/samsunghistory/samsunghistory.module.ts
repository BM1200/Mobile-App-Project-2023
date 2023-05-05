import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamsunghistoryPageRoutingModule } from './samsunghistory-routing.module';

import { SamsunghistoryPage } from './samsunghistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamsunghistoryPageRoutingModule
  ],
  declarations: [SamsunghistoryPage]
})
export class SamsunghistoryPageModule {}
