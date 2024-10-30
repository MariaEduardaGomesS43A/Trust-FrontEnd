import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TelaClienteComponent } from './pages/tela-cliente/tela-cliente.component';
import { TelaPedidosComponent } from './pages/tela-pedidos/tela-pedidos.component';

export const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'cliente', component:  TelaClienteComponent},
  { path: 'pedidos', component:  TelaPedidosComponent},

];
