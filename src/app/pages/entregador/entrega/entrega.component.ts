import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';

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

  constructor(private Location: Location) {};

  goBack() {
    this.Location.back()
  }

  onDivClick() {
    this.showConfirm = true; 
  }

  onConfirPayment() {
    this.showConfirm = false;
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }

  onCancelPayment() {
    this.showConfirm = false;
  }
}
