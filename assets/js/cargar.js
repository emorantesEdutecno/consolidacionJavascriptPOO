export default{
  cargarElementos : () =>{
    console.log('Funciona el modulo cargar');
    let elBotonPersona = document.getElementById('botonPersona');
    elBotonPersona.addEventListener('click', crearMascotasPersonas);

/*
    let elBotonRedSocial = document.getElementById('botonRedSocial');
    elBotonRedSocial.addEventListener('click', crearRedesSociales);

    let elBotonProyectos = document.getElementById('botonProyectos');
    elBotonProyectos.addEventListener('click', crearProyectos);

    let elBotonModulo = document.getElementById('botonModulo');
    elBotonModulo.addEventListener('click', probarModulo);
*/
  },

}

let crearMascotasPersonas = ()=>{
  function Mascota(nombre){

    //definimos la variable _nombre como privada por convencion
    let _nombre = nombre;

    // se convierten en privadas cuando invoquemos Object.defineProperty

    // AQUI CREAMOS LAS INTERFACES PRIVADAS PARA ACCEDER A LAS VARIABLES ENCAPSULADAS
    //encapsulamos el acceso a _numero, a través de _getNombre
    Object.defineProperty(this, '_getNombre', {
      get:function(){
        return _nombre;
      }
    });//fin Object.defineProperty

    //encapsulamos la modificación de _nombre, a través de _setNombre
    Object.defineProperty(this, '_setNombre', {
      set:function(nombre){
        _nombre = nombre;
      }
    });//fin Object.defineProperty


  }//fin Funcion Constructora Mascota


function Persona(nombre, mascota){

  //definimos la variable _nombre como privada por convencion
let _nombre = nombre;
//definimos la variable _mascota como privada por convencion
let _mascota = mascota;

// se convierten en privadas cuando invoquemos Object.defineProperty

// AQUI CREAMOS LAS INTERFACES PRIVADAS PARA ACCEDER A LAS VARIABLES ENCAPSULADAS
//encapsulamos el acceso a _numero, a través de _getNombre
Object.defineProperty(this, '_getNombre', {
  get:function(){
    return _nombre;
  }
});//fin Object.defineProperty

//encapsulamos la modificación de _nombre, a través de _setNombre
Object.defineProperty(this, '_setNombre', {
  set:function(nombre){
    _nombre = nombre;
  }
});//fin Object.defineProperty

//encapsulamos el acceso a _mascota, a través de _getMascota
Object.defineProperty(this, '_getMascota', {
  get: function(){
    return _mascota;
  }
});//fin Object.defineProperty

//encapsulamos la modificacion de _mascota, a través de _setMascota
Object.defineProperty(this, '_setMascota', {
  set: function(mascota){
    _mascota = mascota;
  }
});


}//fin Funcion constructora Persona


// A TRAVÉS DEL PROTOTYPE DEFINIMOS LAS INTERFACES PÚBLICAS QUE LLAMARAN A LAS INTERFACES PRIVADAS PARA ACCEDER A LAS VARIABLES encapsularDatos
//definimos la interfaz publica getNombre, que a su vez llamara a la interfaz privada _getNombre
Mascota.prototype.getNombre = function(){
  return this._getNombre;
}
//definimos la interfaz publica setNumero, que a su vez llamara a la interfaz privada _setNombre
Mascota.prototype.setNombre = function(nombre){
this._setNombre = nombre;
}


//definimos la interfaz publica getNombre, que a su vez llamara a la interfaz privada _getNombre
 Persona.prototype.getNombre = function(){
   return this._getNombre;
 }
//definimos la interfaz publica setNumero, que a su vez llamara a la interfaz privada _setNombre
Persona.prototype.setNombre = function(nombre){
this._setNombre = nombre;
}

//definimos la interfaz publica getPinta, que a su vez llamará a la interfaz privada _getMascota
Persona.prototype.getMascota = function(){
return this._getMascota;
}
//definimos la interfaz publica setPinta, que a su vez llamará a la interfaz privada _setMascota
Persona.prototype.setMascota = function(mascota){
this._setMascota = mascota;
}


let m1 = new Mascota('Snowball');
let p1 = new Persona('Julian', m1);


console.log(m1);
console.log(p1);
console.log(m1.getNombre());
console.log(p1.getNombre());
p1.setNombre('Elfar');
console.log(p1.getNombre());
console.log(p1.getMascota());
console.log(p1.getMascota().getNombre());
m1.setNombre('Firulais');
console.log(p1.getMascota().getNombre());

}// fin crearMascotasPersonas
