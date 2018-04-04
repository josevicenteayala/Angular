import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  nombre:string = "José Vicente Ayala Luna";
  palabaraExtrana:string = "Esta es una cadena CON DIVERSAS LETRAS";
  arreglo:number[] =[1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  a:number = 0.2345;
  salario:number=1234.5;
  fecha = new Date();
  video = "L3wKzyIN1yk";
  password = "esta es una contrasena";
  activar:boolean = true;

  persona = {
    nombre: "Vicente",
    edad:"42",
    direccion:{
        calle:"Calle 5A",
        casa:"10"
    }
  }

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Llegó la data!'),3500);
  });

}
