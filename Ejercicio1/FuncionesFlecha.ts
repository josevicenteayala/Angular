
let miFuncion = function(a:any){
  return a;
}

let miFuncionF = a => a;

let miFuncion2 = function(a:number,b:number){
  return a+b;
}

let miFuncion2F = (a:number,b:number)=> a+b;

let miFuncion3 = function(cadena:string){
  return cadena.toUpperCase();
}

let miFuncion3F = (cadena:string) =>{
  return cadena.toUpperCase();
}


let compras={
  lugarCompra:"Market Place",
  mostrarLigarDeCompras(){
    setTimeout(()=>console.log(this.lugarCompra),1500);
  }
}

console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));

console.log(miFuncion2(4,3));
console.log(miFuncion2F(5,7));

console.log(miFuncion3("cadena a poner en mayúscula"));
console.log(miFuncion3F("Esta es la cadena a poner en mayúscula"));

compras;
compras.mostrarLigarDeCompras();
