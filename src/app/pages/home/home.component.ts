import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}
  goCadastro() {
    this.router.navigate(['/cadastro-cliente'])
  }
  goCozinha() {
    this.router.navigate(['/pedidos-cozinha'])
  }
  goEntregador() {
    this.router.navigate(['/pedidos-entregador'])
  }
}
