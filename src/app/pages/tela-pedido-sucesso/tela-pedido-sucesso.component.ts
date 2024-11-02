import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-pedido-sucesso',
  standalone: true,
  imports: [],
  templateUrl: './tela-pedido-sucesso.component.html',
  styleUrl: './tela-pedido-sucesso.component.css'
})
export class TelaPedidoSucessoComponent {
  constructor(private route: Router){}

  irParaCliente() {
    this.route.navigate(['/']);
  }
}
