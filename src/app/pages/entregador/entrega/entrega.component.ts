import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { GetPedidoSucessoService } from '../../../services/get-pedido-sucesso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrega',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrega.component.html',
  styleUrl: './entrega.component.scss'
})
export class EntregaComponent {
  showConfirm = false;
  showMessage = false;
  public order: any;

  constructor(private Location: Location,
    public service: GetPedidoSucessoService,
    public router: Router
  ) {};

  ngOnInit() {
    this.order = this.service.getOrder();
    console.log(this.order);
  }

  goBack() {
    this.Location.back()
  }

  onDivClick() {
    this.showConfirm = true; 
  }

  onConfirPayment() {
    this.service.deleteOrder(this.order.id).subscribe((data) => {
      this.showConfirm = false;
      this.showMessage = true;
  
      setTimeout(() => {
        this.showMessage = false;
        this.router.navigate(['/']);
      }, 5000);
    });
  }

  onCancelPayment() {
    this.showConfirm = false;
  }
}
