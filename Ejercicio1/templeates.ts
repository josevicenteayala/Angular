
let nombre2:string = "Jose Vicente";
let apellido:string = "Ayala Luna";
let edad:number = 32;

let texto = `Hola,
${nombre2} ${apellido}
(${edad})`;

console.log(texto);

function activar(quien:string, objeto:string="De Compras", momento?:string){
  let menesajeActivacion:string;
  if(momento){
      menesajeActivacion=`${quien} activó el sistema ${objeto}, en el momento: ${momento}`;
  }else{
    menesajeActivacion=`${quien} activó el sistema ${objeto}`;
  }
  console.log(menesajeActivacion);
}

activar("Vincent");
activar("Marta", "Celular");
activar("Isabel", "Lego", "Después de llegar del colegio");
