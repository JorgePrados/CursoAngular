import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: "Jorge",
    apellido: "Prados",
    email: "jorge@gmail.com"
  }
  constructor() { }

  ngOnInit() {
  }
  guardar(form:NgForm){
    console.log("Form: ",form);
    console.log("Valor: ",form.value);
    console.log("Usuario: ",this.usuario);
  }

}
