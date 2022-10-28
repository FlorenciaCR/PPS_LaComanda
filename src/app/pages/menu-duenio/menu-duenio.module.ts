import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDuenioPageRoutingModule } from './menu-duenio-routing.module';

import { MenuDuenioPage } from './menu-duenio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDuenioPageRoutingModule
  ],
  declarations: [MenuDuenioPage]
})
export class MenuDuenioPageModule {}
