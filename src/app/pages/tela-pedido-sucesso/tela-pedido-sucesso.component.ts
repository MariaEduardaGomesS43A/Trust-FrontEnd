import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetPedidoSucessoService } from '../../services/get-pedido-sucesso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-pedido-sucesso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-pedido-sucesso.component.html',
  styleUrl: './tela-pedido-sucesso.component.css'
})
export class TelaPedidoSucessoComponent  implements OnInit {
   orderDetailsMock = {
    id: 12345,
    status: 'PREPARANDO PEDIDO',
    deliveryEstimate: '40 MIN',
    address: 'João Torres Neto Miguel, 152 - Parque Sol',
    seller: 'Trust',
    items: [
      {
        name: 'Pizza de Calabresa Com Cebola Caramelizada',
        quantity: 1,
        price: 69.00
      }
    ],
    paymentInfo: {
      subtotal: 69.90,
      deliveryFee: 7.00,
      total: 76.90,
      method: 'Pix'
    }
  };

  orderDetails: any;


  constructor(private route: Router, private getPedidoSucesso: GetPedidoSucessoService){}

  ngOnInit(): void {
    const orderId = 12345; // Substitua pelo ID do pedido que deseja buscar
    this.orderDetails = this.orderDetailsMock;

    this.getPedidoSucesso.getOrderDetails(orderId).subscribe(
      (data) => {
        this.orderDetails = data;
      },
      (error) => {
        console.error('Erro ao buscar informações do pedido:', error);
      }
    );
  }

  irParaCliente() {
    this.route.navigate(['/']);
  }
}
