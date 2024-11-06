import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; 
import { GetPedidoSucessoService } from '../../../services/get-pedido-sucesso.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosCozinhaComponent {
  showConfirm = false;
  public orders: any;
  public idPedido: string = '';
  constructor(private location: Location,
    public service: GetPedidoSucessoService
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  onDivClick(id: string) {
    this.showConfirm = true; 
    this.idPedido = id;
  }

  onConfirmDelete() {
    alert('Item excluído!');
    this.service.deleteOrder(this.idPedido).subscribe((data) => {
      console.log("item excluido");
      this.ngOnInit();  
    })
    this.showConfirm = false; 
  }

  onCancelDelete() {
    this.showConfirm = false; 
  }

  goBack(){
    this.location.back();
  }

  public getOrders() {
    this.service.getOrders().subscribe((data) => {
      this.orders = data;
    })
  }

  public formatTimeElapsed(timestamp: string): string {
    const orderTime = new Date(timestamp);
    const now = new Date();
    const elapsed = Math.floor((now.getTime() - orderTime.getTime()) / 1000); // em segundos

    const minutes = Math.floor(elapsed / 60);
    const hours = Math.floor(elapsed / 3600);
    const days = Math.floor(elapsed / 86400);

    if (days > 0) {
      return `pedido feito há ${days} dia${days > 1 ? 's' : ''}`;
    }
    if (hours > 0) {
      return `pedido feito há ${hours} hora${hours > 1 ? 's' : ''}`;
    }
    if (minutes > 0) {
      return `pedido feito há ${minutes} minuto${minutes > 1 ? 's' : ''}`;
    }
    return 'pedido feito há menos de um minuto';
  }
}
