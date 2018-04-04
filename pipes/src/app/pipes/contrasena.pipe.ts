import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, ocultarContrasena: boolean): string {
    console.log("Value con la contrasena "+value);
    console.log("Argumentos de la contrasena "+ocultarContrasena);
    if(ocultarContrasena){
      let tamanoContrasena = value.length;
      let cadenaAsteriscos:string = "";
      for(var i = 0; i < tamanoContrasena; i ++){
        cadenaAsteriscos = cadenaAsteriscos.concat("*");
      }
      return cadenaAsteriscos;
    }else{
      return value;
    }

  }

}
