let nombre :string = "Jose Vicente";
let numero:number = 12345;
let booleano:boolean = true;
let fecha:Date = new Date();
let cualquiera:any = 123;

function saludar(nombre:string){
  console.log("Hola "+nombre);
}
var contieneNombre = {
  nombre : "Jose Vicente"
};

saludar(contieneNombre.nombre);
