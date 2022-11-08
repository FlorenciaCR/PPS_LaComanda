import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'alta-cliente',
    loadChildren: () => import('./pages/alta-cliente/alta-cliente.module').then( m => m.AltaClientePageModule)

  },
  {
    path: 'menu-duenio',
    loadChildren: () => import('./pages/menu-duenio/menu-duenio.module').then( m => m.MenuDuenioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'alta-anonimo',
    loadChildren: () => import('./pages/alta-anonimo/alta-anonimo.module').then( m => m.AltaAnonimoPageModule)

  },
  {
    path: 'home-cliente',
    loadChildren: () => import('./pages/home-cliente/home-cliente.module').then( m => m.HomeClientePageModule)
  },
  {
    path: 'alta-empleado',
    loadChildren: () => import('./pages/alta-empleado/alta-empleado.module').then( m => m.AltaEmpleadoPageModule)

  },
  {
    path: 'encuestas',
    loadChildren: () => import('./pages/encuestas/encuestas.module').then( m => m.EncuestasPageModule)
  },
  {
    path: 'pregunta1',
    loadChildren: () => import('./components/pagesEncuestaEmpleado/pregunta1/pregunta1.module').then( m => m.Pregunta1PageModule)
  },
  {
    path: 'pregunta2',
    loadChildren: () => import('./components/pagesEncuestaEmpleado/pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
  },
  {
    path: 'pregunta3',
    loadChildren: () => import('./components/pagesEncuestaEmpleado/pregunta3/pregunta3.module').then( m => m.Pregunta3PageModule)
  },
  {
    path: 'pregunta4',
    loadChildren: () => import('./components/pagesEncuestaEmpleado/pregunta4/pregunta4.module').then( m => m.Pregunta4PageModule)
  },
  {
    path: 'pregunta5',
    loadChildren: () => import('./components/pagesEncuestaEmpleado/pregunta5/pregunta5.module').then( m => m.Pregunta5PageModule)
  },  {
    path: 'lista-productos',
    loadChildren: () => import('./pages/lista-productos/lista-productos.module').then( m => m.ListaProductosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  }

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


