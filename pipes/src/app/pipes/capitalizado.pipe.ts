import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, ... args: any[]): string {
    console.log("Argumentos:  "+args);
    console.log("Valor que llega al pipe: "+value);
    value = value.toLowerCase();
    let palabras = value.split(" ");
    for(let contador in palabras){
      palabras[contador] = palabras[contador][0].toUpperCase() + palabras[contador].substr(1);
    }
    return palabras.join(" ");
  }
}
