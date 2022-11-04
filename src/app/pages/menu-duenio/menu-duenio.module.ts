import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDuenioPageRoutingModule } from './menu-duenio-routing.module';

import { MenuDuenioPage } from './menu-duenio.page';
import { AltaDuenioSupComponent } from 'src/app/components/alta-duenio-sup/alta-duenio-sup.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ListaDeshabilitadosComponent } from 'src/app/components/lista-deshabilitados/lista-deshabilitados.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDuenioPageRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MenuDuenioPage,AltaDuenioSupComponent,ListaDeshabilitadosComponent]
})
export class MenuDuenioPageModule {}
