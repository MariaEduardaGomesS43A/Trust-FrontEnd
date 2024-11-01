import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { PostPedidosService } from '../../services/post-pedidos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-editar-pedido',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './tela-editar-pedido.component.html',
  styleUrl: './tela-editar-pedido.component.css'
})
export class TelaEditarPedidoComponent {
  items = [
    {
      category: 'Pizza',
      name: 'Pizza de Calabresa com Cebola Caramelizada',
      description: 'Molho de tomate pelatti, muçarela especial, calabresa especial, cebola caramelizada. Dê seu toque gourmet escolhendo entre...',
      serves: '3 pessoas',
      price: 69.90,
      originalPrice: 99.90,
      restaurant: 'Pizzaria Trust',
      deliveryTime: '20-40 min'
    },
  ];
  quantity = 1;
  totalPrice = this.items[0].price;

  constructor(private pedidoService: PostPedidosService, private router: Router) {}

  ngOnInit() {}

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
        this.irParaEditarPedidos();
      },
      error => {
        console.error('Erro ao enviar o pedido:', error);
        this.irParaEditarPedidos();
      }
    );
  }

  irParaEditarPedidos() {
    this.router.navigate(['editar-pedido']);
  }
}
