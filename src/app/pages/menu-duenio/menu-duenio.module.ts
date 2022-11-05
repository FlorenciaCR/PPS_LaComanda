import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDuenioPageRoutingModule } from './menu-duenio-routing.module';

import { MenuDuenioPage } from './menu-duenio.page';
import { AltaDuenioSupComponent } from 'src/app/components/alta-duenio-sup/alta-duenio-sup.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPseudoCheckboxModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDuenioPageRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatPseudoCheckboxModule
  ],
  declarations: [MenuDuenioPage,AltaDuenioSupComponent]
})
export class MenuDuenioPageModule {}
