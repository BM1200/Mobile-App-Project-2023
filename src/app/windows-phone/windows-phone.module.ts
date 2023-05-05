import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WindowsPhonePageRoutingModule } from './windows-phone-routing.module';

import { WindowsPhonePage } from './windows-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WindowsPhonePageRoutingModule
  ],
  declarations: [WindowsPhonePage]
})
export class WindowsPhonePageModule {}
