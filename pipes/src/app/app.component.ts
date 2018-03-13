import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre:string = "José Vicente Ayala Luna";
  arreglo:number[] =[1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  a:number = 0.2345;
  salario:number=1234.5;
}
