import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showHeaderButton = false;
  headerTitulo = 'Faça sua compra na Trust';

  constructor(private route: Router) { }

  irParaCliente() {
    this.route.navigate(['cliente']);
  }

  goCadastro() {
    this.route.navigate(['/cadastro-cliente'])
  }
  goCozinha() {
    this.route.navigate(['/pedidos-cozinha'])
  }
  goEntregador() {
    this.route.navigate(['/pedidos-entregador'])
  }
}
