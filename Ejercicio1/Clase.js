"use strict";
var Compra = /** @class */ (function () {
    function Compra(fecha, lugar, valor) {
        this.fechaCompra = fecha;
        this.lugarCompra = lugar;
        this.valorCompra = valor;
    }
    return Compra;
}());
var compra = new Compra(new Date(), "El Tesoro", 10);
console.log(compra);
