import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostPedidosService } from '../../services/post-pedidos.service';
import { Router } from '@angular/router';
import { DecimalFormatterPipe } from '../../pipe/decimal-formatter.pipe';
import { PostPedidos2Service } from '../../services/post-pedidos2.service';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-tela-pedidos',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, DecimalFormatterPipe],
  templateUrl: './tela-pedidos.component.html',
  styleUrls: ['./tela-pedidos.component.css']
})
export class TelaPedidosComponent {

  quantity = 1;
  selectedItemIndex = 0;
  public dishes: any = {};
  totalPrice = this.dishes.price;
  Title = "Trust: Seu Pedido, Nossa Prioridade";
  public disheId: number = 0;

  constructor(private orderService: PostPedidos2Service, private route: Router, public dishService: DishService) {}

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
    this.totalPrice = this.dishes[this.selectedItemIndex].price * this.quantity;
  }

  public selectDisheId(id: number) {
    this.disheId = id;
  }

  addToCart(): void {
    const selectedItem = this.dishes[this.selectedItemIndex]; // Obtém o item selecionado

    // Aqui você deve garantir que o 'dishId' e a 'quantity' estão corretos
    const orderData = {
      clientId: 1, // Defina o clientId conforme necessário
      itens: [
        {
          dishId: this.disheId, // Obtém o dishId do item selecionadoD
          quantity: this.quantity // Usa a quantidade selecionada
        }
      ]
    };

    console.log('Dados do pedido:', orderData); // Log para verificar os dados antes do envio
    this.dishService.setGeneratedDishId(this.disheId);
    this.orderService.placeOrder(orderData.clientId, orderData.itens).subscribe(
      response => {
        console.log('Pedido enviado com sucesso:', response);
        // Aqui você pode redirecionar o usuário ou mostrar uma mensagem de sucesso
        this.route.navigate(['editar-pedido']);
      },
      error => {
        console.error('Erro ao enviar pedido:', error);
        // Aqui você pode mostrar uma mensagem de erro
        this.route.navigate(['editar-pedido']);
      }
    );
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

  ngOnInit() {
    this.dishService.getDishes().subscribe((data) => {
      this.dishes = data;
      this.updateTotalPrice() 
    })
  }
}
