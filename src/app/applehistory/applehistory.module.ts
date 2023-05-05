import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplehistoryPageRoutingModule } from './applehistory-routing.module';

import { ApplehistoryPage } from './applehistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplehistoryPageRoutingModule
  ],
  declarations: [ApplehistoryPage]
})
export class ApplehistoryPageModule {}
