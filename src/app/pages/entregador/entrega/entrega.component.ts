import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { GetPedidoSucessoService } from '../../../services/get-pedido-sucesso.service';
import { Router } from '@angular/router';
import { PhonePipePipe } from '../../../pipe/phone-pipe.pipe';
import { CepPipe } from '../../../pipe/cep.pipe';



@Component({
  selector: 'app-entrega',
  standalone: true,
  imports: [CommonModule, PhonePipePipe, CepPipe],
  templateUrl: './entrega.component.html',
  styleUrl: './entrega.component.scss'
})
export class EntregaComponent {
  showConfirm = false;
  showMessage = false;
  public order: any;
  number: any;

  constructor(private Location: Location,
    public service: GetPedidoSucessoService,

    public router: Router
  ) {};

  async ngOnInit() {
    this.order = await this.service.getOrder();
    this.service.getClient().subscribe(
      response => {
        console.log('valor de: ', response);
        this.number = response.number;
      },
      error =>{
        console.error('Erro fazer o get cliente:', error);
      }
    )
    console.log(this.order);
  }

  goBack() {
    this.Location.back()
  }

  onDivClick() {
    this.showConfirm = true;
  }

  onConfirPayment() {
    this.service.updateOrderToShipped(this.order.id, 3).subscribe((data) => {
      this.showConfirm = false;
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
        this.router.navigate(['/']);
      }, 3000);
    });
  }

  onCancelPayment() {
    this.showConfirm = false;
  }
}
