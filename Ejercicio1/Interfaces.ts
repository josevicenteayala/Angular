interface Articulo{
  nombre:string,
  precio:number,
  marca:string
}

function comprar(articulo:Articulo){
  console.log("Comprando artículo: "+articulo.nombre);
  console.log("La marca es: "+articulo.marca);
  console.log("El precio es: "+articulo.precio);
}

function vender(articulo:Articulo){
  console.log("Vendiendo artículo: "+articulo.nombre);
  console.log("La marca es: "+articulo.marca);
  console.log("El precio es: "+articulo.precio);
}

let vehiculo = {
  nombre : "Nissan",
  precio : 10,
  marca : "Sentra"
};

comprar(vehiculo);
vender(vehiculo);
