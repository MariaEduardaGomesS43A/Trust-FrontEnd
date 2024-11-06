import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditarPedidoService } from '../../services/editar-pedido.service';
import { FormsModule } from '@angular/forms';
import { DecimalFormatterPipe } from '../../pipe/decimal-formatter.pipe';

@Component({
  selector: 'app-tela-editar-pedido',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, DecimalFormatterPipe],
  templateUrl: './tela-editar-pedido.component.html',
  styleUrls: ['./tela-editar-pedido.component.css']
})
export class TelaEditarPedidoComponent implements OnInit {
  items = [
    {
      category: 'Pizza',
      name: 'Pizza de Calabresa com Cebola Caramelizada',
      description: 'Molho de tomate pelatti, muçarela especial, calabresa especial, cebola caramelizada.',
      serves: '3 pessoas',
      price: 69.90,
      originalPrice: 99.90,
      restaurant: 'Pizzaria Trust',
      deliveryTime: '20-40 min'
    },
  ];
  quantity = 1;
  totalPrice = 0;
  observacoes = ''; // Armazena o valor da textarea
  showConfirm = false; // Controle para exibir o toast
  selectedItem: any; // Armazena o item selecionado para confirmar
  headerTitulo = 'PEDIDOS';

  constructor(
    private router: Router,
    private editarPedidoService: EditarPedidoService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.editarPedidoService.getProduros().subscribe(
      (data) => {
        this.items = data;
        this.totalPrice = this.items[0]?.price * this.quantity || 0;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  confirmarPedido(item: any) {
    this.selectedItem = { ...item, observacoes: this.observacoes }; // Guarda o item com observações
    this.showConfirm = true; // Exibe o toast
  }

  onConfirmEdit() {
    if (this.selectedItem) {
      this.editarPedidoService.updateProduto(this.selectedItem.name, this.selectedItem).subscribe(
        (response) => {
          console.log('Pedido atualizado com sucesso:', response);
          this.loadProducts();
          this.observacoes = ''; // Limpa o campo de observações
          this.showConfirm = false; // Oculta o toast
          this.router.navigate(['pedido-succeso']);
        },
        (error) => {
          console.error('Erro ao atualizar pedido:', error);
          this.router.navigate(['pedido-succeso']);
        }
      );
    }
  }

  onCancelEdit() {
    this.showConfirm = false; // Oculta o toast ao cancelar
  }
}
