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


  public orderDetailsMock: any = {};
  cep = 0
  quantity = 0
  total= 0;
  taxaEntrega = 7;
  orderDetails: any;
  item: any;



  constructor(private route: Router, private getPedidoSucesso: GetPedidoSucessoService){}

  ngOnInit(): void {
    const orderId = 1; // Substitua pelo ID do pedido que deseja buscar
    this.orderDetails = this.orderDetailsMock;
    this.getPedidoSucesso.getOrderDetails(orderId).subscribe(
      (data) => {
        this.orderDetails = data;
        this.cep= this.orderDetails.client.cep
        this.item = this.orderDetails.itens[0].dish;
        this.quantity =  this.orderDetails.itens[0].quantity;
        this.total = this.taxaEntrega + this.orderDetails.valor ;


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
