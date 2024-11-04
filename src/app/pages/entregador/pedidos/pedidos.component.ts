import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosEntregadorComponent {
  constructor(private location: Location,  private router: Router) { }

  goEntrega(){
    this.router.navigate(['/entrega-entregador']);
  }

  goBack(){
    this.location.back();
  }
}
