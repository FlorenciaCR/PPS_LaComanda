import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeClientePageRoutingModule } from './home-cliente-routing.module';

import { HomeClientePage } from './home-cliente.page';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EncuestasComponent } from 'src/app/components/encuestas/encuestas.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClientePageRoutingModule,
  ],
  declarations: [HomeClientePage,EncuestasComponent],
  providers:[AngularFirestore]
})
export class HomeClientePageModule {}
