@salidaPorconsola
class CompraDecorador{
  fechaCompra:Date;
  lugarCompra:string;
  valorCompra:number;

  constructor(fecha:Date,lugar:string,valor:number){
    this.fechaCompra = fecha;
    this.lugarCompra = lugar;
    this.valorCompra = valor;
  }

}

function salidaPorconsola(constructor:Function){
  console.log("Imprimiendo el constructor de la clase");
  console.log(constructor);
}
