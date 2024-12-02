import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetPedidoSucessoService } from '../../../services/get-pedido-sucesso.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosEntregadorComponent {
  constructor(private location: Location,  private router: Router, public service: GetPedidoSucessoService) { }
  public orders: any;

  goEntrega(order: any){
    this.service.setOrder(order);
    this.router.navigate(['/entrega-entregador']);
  }

  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.getOrders();
  }

  public getOrders() {
    this.service.getOrdersShipped().subscribe((data) => {
      this.orders = data;
      console.log(this.orders);
    })
  }
}
