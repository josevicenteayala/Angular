"use strict";
var nombre2 = "Jose Vicente";
var apellido = "Ayala Luna";
var edad = 32;
var texto = "Hola,\n" + nombre2 + " " + apellido + "\n(" + edad + ")";
console.log(texto);
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "De Compras"; }
    var menesajeActivacion;
    if (momento) {
        menesajeActivacion = quien + " activ\u00F3 el sistema " + objeto + ", en el momento: " + momento;
    }
    else {
        menesajeActivacion = quien + " activ\u00F3 el sistema " + objeto;
    }
    console.log(menesajeActivacion);
}
activar("Vincent");
activar("Marta", "Celular");
activar("Isabel", "Lego", "Después de llegar del colegio");
