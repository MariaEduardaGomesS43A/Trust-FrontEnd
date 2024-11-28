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
  public items: any = {};
  quantity = 1;
  totalPrice = 0;
  observacoes = ''; // Armazena o valor da textarea
  showConfirm = false; // Controle para exibir o toast
  selectedItem: any; // Armazena o item selecionado para confirmar
  headerTitulo = 'PEDIDOS';
  serve = ['Serve 3 pessoas', 'Serve 1 pessoa'];
  arrayDescriptions = [
    'Molho de tomate pelatti, muçarela especial, calabresa especial,cebola caramelizada. Dê seu toque gourmet escolhendo entre…',
    'Feito com bolo de chocolate molhado com calda de leite condensado, Nutella pura e recheio de leite Ninho.',
    'Coca cola original de 2L'
  ]
  condicional01 = false;
  condicional02 =  false;

  condicaoDescricao01 = false;
  condicaoDescricao02 = false;
  condicaoDescricao03 = false;
  preco = 0;


  constructor(
    private router: Router,
    private editarPedidoService: EditarPedidoService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.editarPedidoService.getProduros().subscribe(
      (data) => {
        this.items = data[0].itens[0];
        this.preco = data[0].valor;

        console.log("Isso é o que temos dentro de data: ", this.items);
        console.log("Isso é o que temos dentro de valor: ", this.preco);
        this.condicional01 = this.items.name ==  'Pizza de Calabresa com Cebola Caramelizada';
        this.condicional02 =  this.items.name == 'Bolo De Pote: Ninho com Nutella';


        this.condicaoDescricao01 =  this.items.name == 'Pizza de Calabresa com Cebola Caramelizada';
        this.condicaoDescricao02 =  this.items.name == 'Bolo De Pote: Ninho com Nutella';
        this.condicaoDescricao03 =  this.items.name == 'Coca - Cola';
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  confirmarPedido(item: any) {
    this.selectedItem = { ...item, observacoes: this.observacoes };
    this.showConfirm = true;
  }

  onConfirmEdit() {
    console.log("valor observa: ", this.observacoes)
    this.router.navigate(['pedido-succeso']);

    if (this.selectedItem) {
      this.editarPedidoService.updateProduto(this.observacoes).subscribe(
        (response) => {
          console.log('Pedido atualizado com sucesso:', response);
          this.loadProducts();
          this.observacoes = ''; // Limpa o campo de observações
          this.showConfirm = false; // Oculta o toast

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
