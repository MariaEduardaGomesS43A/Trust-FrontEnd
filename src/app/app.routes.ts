import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TelaClienteComponent } from './pages/tela-cliente/tela-cliente.component';
import { TelaPedidosComponent } from './pages/tela-pedidos/tela-pedidos.component';
import { TelaEditarPedidoComponent } from './pages/tela-editar-pedido/tela-editar-pedido.component';
import { TelaPedidoSucessoComponent } from './pages/tela-pedido-sucesso/tela-pedido-sucesso.component';

export const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'cliente', component:  TelaClienteComponent},
  { path: 'pedido', component:  TelaPedidosComponent},
  { path: 'editar-pedido', component:  TelaEditarPedidoComponent},
  { path: 'pedido-succeso', component:  TelaPedidoSucessoComponent},

];
