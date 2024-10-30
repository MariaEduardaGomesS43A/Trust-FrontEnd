import { Component } from '@angular/core';

import {  ReactiveFormsModule } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form-client',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.css'
})
export class FormClientComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    zipcode: new FormControl(''),
    number: new FormControl(''),
  })

  handleSubmit(){
    console.log(this.profileForm.value)
  }
}
