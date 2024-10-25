import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosCozinhaComponent {
  showConfirm = false;
  constructor(private location: Location) {}

  onDivClick() {
    this.showConfirm = true; 
  }

  onConfirmDelete() {
    alert('Item excluído!');
    this.showConfirm = false; 
  }

  onCancelDelete() {
    this.showConfirm = false; 
  }

  goBack(){
    this.location.back();
  }
}
