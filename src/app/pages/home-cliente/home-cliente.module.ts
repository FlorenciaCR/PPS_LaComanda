import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeClientePageRoutingModule } from './home-cliente-routing.module';

import { HomeClientePage } from './home-cliente.page';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ListaProductosPage } from '../lista-productos/lista-productos.page';
import { ChatPage } from '../chat/chat.page';
import { CuentaPage } from '../cuenta/cuenta.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClientePageRoutingModule,
  ],
  declarations: [HomeClientePage,ChatPage,ListaProductosPage,CuentaPage],
  providers:[AngularFirestore]
})
export class HomeClientePageModule {}
