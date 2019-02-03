import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: "Jorge",
      apellido: "Prados"
    },
    email: "jorge@gmail.com"
  }
  constructor() {
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)]),
        'apellido': new FormControl('',
          Validators.required)
      }),
      
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ])
    });

    this.forma.setValue( this.usuario);    
  }

  gardarCambios() {
    console.log(this.forma.value);

    this.forma.reset(this.usuario);
  }

  ngOnInit() {
  }

}
