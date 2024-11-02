import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditarPedidoService } from '../../services/editar-pedido.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-editar-pedido',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './tela-editar-pedido.component.html',
  styleUrls: ['./tela-editar-pedido.component.css']
})
export class TelaEditarPedidoComponent implements OnInit {
  //items: any[] = []; alterar assim que integrar com o be
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
  ]; // Agora vai receber os dados da API
  quantity = 1;
  totalPrice = 0;
  observacoes = ''; // Variável para armazenar o valor da textarea

  constructor(
    private router: Router,
    private editarPedidoService: EditarPedidoService // Injeta o ProductService
  ) {}

  ngOnInit() {
    this.loadProducts(); // Carrega os produtos ao iniciar o componente
  }

  // Método para carregar os produtos usando o GET do ProductService
  loadProducts() {
    this.editarPedidoService.getProduros().subscribe(
      (data) => {
        this.items = data; // Atualiza o array items com os dados da API
        this.totalPrice = this.items[0]?.price * this.quantity || 0; // Calcula o preço total
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  // Método para enviar a atualização de observações para a API
  confirmarPedido(item: any) {
    // Adiciona o valor da textarea às observações do item
    const updatedData = { ...item, observacoes: this.observacoes };

    // Chama o serviço para atualizar o item na API
    this.editarPedidoService.updateProduto(item.name, updatedData).subscribe(
      (response) => {
        console.log('Pedido atualizado com sucesso:', response);
        this.loadProducts(); // Recarrega os produtos para refletir a atualização
        this.observacoes = ''; // Limpa o campo de observações após o envio
      },
      (error) => {
        console.error('Erro ao atualizar pedido:', error);
      }
    );
  }

  irParaEditarPedidos() {
    this.router.navigate(['editar-pedido']);
  }
}
