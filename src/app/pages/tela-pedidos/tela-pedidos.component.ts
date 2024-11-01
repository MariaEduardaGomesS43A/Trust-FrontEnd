import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tela-pedidos',
  standalone: true,
  imports: [HeaderComponent, CommonModule,FormsModule],
  templateUrl: './tela-pedidos.component.html',
  styleUrl: './tela-pedidos.component.css'
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
  totalPrice = 69.90; // Ajustar conforme a lógica do seu carrinho

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    console.log('Item adicionado ao carrinho', this.items, this.quantity);
    // Adicione sua lógica de adicionar ao carrinho aqui
  }
}
