import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostPedidosService } from '../../services/post-pedidos.service';
import { Router } from '@angular/router';
import { DecimalFormatterPipe } from '../../pipe/decimal-formatter.pipe';


@Component({
  selector: 'app-tela-pedidos',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, DecimalFormatterPipe],
  templateUrl: './tela-pedidos.component.html',
  styleUrls: ['./tela-pedidos.component.css']
})
export class TelaPedidosComponent {
  items = [
    {
      category: 'Pizza',
      name: 'Pizza de Calabresa com Cebola Caramelizada',
      description: 'Molho de tomate pelatti, muçarela especial, calabresa especial, cebola caramelizada.',
      serves: '3 pessoas',
      price: 69.90,
      originalPrice: 99.90,
      dishId: 1 // Adicione o dishId correspondente
    },
    {
      category: 'Sobremessa',
      name: 'Bolo De Pote: Ninho com Nutella',
      description: 'Feito com bolo de chocolate molhado com calda de leite condensado, Nutella pura e recheio de leite Ninho.',
      serves: '1 pessoa',
      price: 20.00,
      originalPrice: 35.00,
      dishId: 2 // Adicione o dishId correspondente
    },
    {
      category: 'Bebida',
      name: 'Coca - Cola',
      description: 'Coca cola original de 2L',
      serves: '',
      price: 10.00,
      originalPrice: 15.00,
      dishId: 3 // Adicione o dishId correspondente
    }
  ];

  quantity = 1;
  selectedItemIndex = 0;
  totalPrice = this.items[0].price;
  Title = "Trust: Seu Pedido, Nossa Prioridade";

  constructor(private postPedidos: PostPedidosService, private route: Router) {}

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
    this.totalPrice = this.items[this.selectedItemIndex].price * this.quantity;
  }

  addToCart(): void {
    const selectedItem = this.items[this.selectedItemIndex]; // Obtém o item selecionado

    const pratoEditado = {
      //id: selectedItem.dishId, -- banco de dados cria o id
      name: selectedItem.name,
      description: selectedItem.description,
      price: selectedItem.price
    }



    this.postPedidos.enviarPrato(pratoEditado).subscribe({
      next: () =>{
        console.log("funcinou meu aliado!")
        console.log(pratoEditado);
      },
      error: (err) =>{
        console.log(err + "algo deu errado grandê!")
      }

    })

  }

  onSelectItem(index: number): void {
    this.selectedItemIndex = index;
    this.updateTotalPrice();
  }

  irParaEditarPedidos() {
    this.route.navigate(['editar-pedido']);
  }

  irParaCliente() {
    this.route.navigate(['']);
  }
}
