"use strict";
function comprar(articulo) {
    console.log("Comprando artículo: " + articulo.nombre);
    console.log("La marca es: " + articulo.marca);
    console.log("El precio es: " + articulo.precio);
}
function vender(articulo) {
    console.log("Vendiendo artículo: " + articulo.nombre);
    console.log("La marca es: " + articulo.marca);
    console.log("El precio es: " + articulo.precio);
}
var vehiculo = {
    nombre: "Nissan",
    precio: 10,
    marca: "Sentra"
};
comprar(vehiculo);
vender(vehiculo);
