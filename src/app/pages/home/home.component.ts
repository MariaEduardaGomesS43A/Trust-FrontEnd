import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: Route){ }

  irParaCliente(){
    this.route.
  }
}
