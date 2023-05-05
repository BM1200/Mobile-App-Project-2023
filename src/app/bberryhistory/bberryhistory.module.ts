import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BberryhistoryPageRoutingModule } from './bberryhistory-routing.module';

import { BberryhistoryPage } from './bberryhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BberryhistoryPageRoutingModule
  ],
  declarations: [BberryhistoryPage]
})
export class BberryhistoryPageModule {}
