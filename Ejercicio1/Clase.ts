class Compra{
  fechaCompra:Date;
  lugarCompra:string;
  valorCompra:number;

  constructor(fecha:Date,lugar:string,valor:number){
    this.fechaCompra = fecha;
    this.lugarCompra = lugar;
    this.valorCompra = valor;
  }

}

let compra:Compra = new Compra(new Date(),"El Tesoro",10);
console.log(compra);
