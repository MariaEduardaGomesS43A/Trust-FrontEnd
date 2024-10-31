import { Component } from '@angular/core';
import { FormClientComponent } from '../../components/form-client/form-client.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-tela-cliente',
  standalone: true,
  imports: [FormClientComponent, HeaderComponent],
  templateUrl: './tela-cliente.component.html',
  styleUrl: './tela-cliente.component.css'
})
export class TelaClienteComponent {

}
