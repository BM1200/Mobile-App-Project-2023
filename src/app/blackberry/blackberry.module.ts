import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackberryPageRoutingModule } from './blackberry-routing.module';

import { BlackberryPage } from './blackberry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackberryPageRoutingModule
  ],
  declarations: [BlackberryPage]
})
export class BlackberryPageModule {}
