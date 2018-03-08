"use strict";
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (cadena) {
    return cadena.toUpperCase();
};
var miFuncion3F = function (cadena) {
    return cadena.toUpperCase();
};
var compras = {
    lugarCompra: "Market Place",
    mostrarLigarDeCompras: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.lugarCompra); }, 1500);
    }
};
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
console.log(miFuncion2(4, 3));
console.log(miFuncion2F(5, 7));
console.log(miFuncion3("cadena a poner en mayúscula"));
console.log(miFuncion3F("Esta es la cadena a poner en mayúscula"));
compras;
compras.mostrarLigarDeCompras();
