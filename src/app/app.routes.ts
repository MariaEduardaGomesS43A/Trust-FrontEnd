import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cliente/cadastro/cadastro.component';
import { PedidosEntregadorComponent } from './pages/entregador/pedidos/pedidos.component';
import { PedidosCozinhaComponent } from './pages/cozinha/pedidos/pedidos.component';
import { EntregaComponent } from './pages/entregador/entrega/entrega.component';

export const routes: Routes = [
  {path:  '', component: HomeComponent},
  {path: 'cadastro-cliente', component: CadastroComponent},
  {path: 'pedidos-cozinha', component: PedidosCozinhaComponent},
  {path: 'pedidos-entregador', component: PedidosEntregadorComponent},
  {path: 'entrega-entregador', component: EntregaComponent},


];
