import { ClientData, PostFormClientService } from './../../services/post-form-client.service';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReactiveFormsModule, Validators } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';





@Component({
  selector: 'app-form-client',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,  ],
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.css'
})
export class FormClientComponent {
  constructor(private router: Router, private postFormClientService: PostFormClientService) {}


  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(11)
    ]),
    zipcode: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    number: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })

  handleSubmit() {
    this.profileForm.markAllAsTouched(); // Força a exibição de erros
    if (this.profileForm.valid) {
      const clientData: ClientData = {
        name: this.profileForm.value.name || '',
        phone: this.profileForm.value.phone || '',
        cep: this.profileForm.value.zipcode || '',
        number: this.profileForm.value.number || ''
      };

      this.postFormClientService.saveClient(clientData).subscribe({
        next: (response) => {
          console.log('Cliente salvo com sucesso', response);
          this.irParaPedidos();
        },
        error: (error) => {
          console.error('Erro ao salvar cliente', error);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }


  irParaPedidos(){
    this.router.navigate(['/pedido'])
  }

}
