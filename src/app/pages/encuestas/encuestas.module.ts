import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestasPageRoutingModule } from './encuestas-routing.module';

import { EncuestasPage } from './encuestas.page';
import { EncuestaClienteComponent } from 'src/app/components/encuesta-cliente/encuesta-cliente.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestasPageRoutingModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
  ],
  declarations: [EncuestasPage,EncuestaClienteComponent]
})
export class EncuestasPageModule {}
