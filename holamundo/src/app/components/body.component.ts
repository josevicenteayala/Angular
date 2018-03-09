import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl:'body.component.html'
})

export class BodyComponent{

  mostrarMensaje:boolean = true;

  frase:any ={
    mensaje:"Esta es la primera aplicación Angular",
    autor:"Vincaqui"
  }

  personajes:string[] = ["Spiderman","Venom","Dr Octopus"];

}
