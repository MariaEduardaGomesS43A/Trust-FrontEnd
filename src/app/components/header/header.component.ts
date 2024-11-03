import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() showButton: boolean = true;
  @Input() Title: string = '';

  @Input() customClass: string = '';

  constructor(private route: Router){}

  irParaCliente() {
    this.route.navigate(['/']);
  }
}
