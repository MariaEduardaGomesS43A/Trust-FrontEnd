import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReactiveFormsModule, Validators } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.css'
})
export class FormClientComponent {
  constructor(private router: Router) {}


  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern("^\\d{10,11}$")
    ]),
    zipcode: new FormControl('', [
      Validators.required,
    ]),
    number: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })

  handleSubmit() {
    this.profileForm.markAllAsTouched(); // Força a exibição de erros
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);

      this.irParaPedidos()
    } else {
      console.log('Formulário inválido');
    }
  }


  irParaPedidos(){
    this.router.navigate(['/pedidos'])
  }

}
