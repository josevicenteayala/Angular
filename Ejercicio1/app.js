"use strict";
var nombre = "Jose Vicente";
var numero = 12345;
var booleano = true;
var fecha = new Date();
var cualquiera = 123;
function saludar(nombre) {
    console.log("Hola " + nombre);
}
var contieneNombre = {
    nombre: "Jose Vicente"
};
saludar(contieneNombre.nombre);
