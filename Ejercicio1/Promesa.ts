let promesa1 = new Promise(function(resolve,reject){
  setTimeout( ()=>{
    console.log("Promesa terminada");
    resolve();

  //  reject();


  },1500
  );

})


promesa1.then(function(){
  console.log("Ejecutarme cuando se termine bien");
},function(){
    console.error("Ejecutarme si las cosas salen mal");
  }
);
