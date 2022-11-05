import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta5PageRoutingModule } from './pregunta5-routing.module';
import { MatMenuModule} from '@angular/material/menu';
import { Pregunta5Page } from './pregunta5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta5PageRoutingModule,
    MatMenuModule
  ],
  declarations: [Pregunta5Page]
})
export class Pregunta5PageModule {}
