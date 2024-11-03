import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostPedidosService } from '../../services/post-pedidos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-pedidos',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './tela-pedidos.component.html',
  styleUrls: ['./tela-pedidos.component.css']
})
export class TelaPedidosComponent {
  items = [
    {
      category: 'Pizza',
      name: 'Pizza de Calabresa com Cebola Caramelizada',
      description: 'Molho de tomate pelatti, muçarela especial, calabresa especial, cebola caramelizada. Dê seu toque gourmet escolhendo entre...',
      serves: '3 pessoas',
      price: 69.90,
      originalPrice: 99.90
    },
    {
      category: 'Sobremessa',
      name: 'Bolo De Pote: Ninho com Nutella',
      description: 'Feito com bolo de chocolate molhado com calda de leite condensado, Nutella pura e recheio de leite Ninho.',
      serves: '1 pessoa',
      price: 20.00,
      originalPrice: 35.00
    },
    {
      category: 'Bebida',
      name: 'Coca - Cola',
      description: 'Coca cola original de 2L',
      serves: '',
      price: 10.00,
      originalPrice: 15.00
    }
  ];

  quantity = 1;
  totalPrice = this.items[0].price;
  headerTitulo = "Trust: Seu Pedido, Nossa Prioridade"

  constructor(private pedidoService: PostPedidosService, private route: Router) {}

  increaseQuantity(): void {
    this.quantity++;
    this.updateTotalPrice();
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  updateTotalPrice(): void {
    this.totalPrice = this.items[0].price * this.quantity;
  }

  addToCart(): void {
    const orderData = {
      items: this.items,
      quantity: this.quantity,
      totalPrice: this.totalPrice
    };

    this.pedidoService.enviarPedido(orderData).subscribe(
      response => {
        console.log('Pedido enviado com sucesso:', response);
        this.irParaEditarPedidos()
      },
      error => {
        console.error('Erro ao enviar o pedido:', error);
        this.irParaEditarPedidos()
      }
    );
  }


  irParaEditarPedidos() {
    this.route.navigate(['editar-pedido']);
  }
}
