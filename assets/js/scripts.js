let cargarElementos = () =>{
  console.log('Funciona Onload');
  let elBotonPersona = document.getElementById('botonPersona');
  elBotonPersona.addEventListener('click', crearMascotasPersonas);

  let elBotonRedSocial = document.getElementById('botonRedSocial');
  elBotonRedSocial.addEventListener('click', crearRedesSociales);

  let elBotonProyectos = document.getElementById('botonProyectos');
  elBotonProyectos.addEventListener('click', crearProyectos);


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


let crearRedesSociales = () =>{
  function RedesSociales(nombre, usuario){
    this.nombre = nombre;
    this.usuario = usuario;
  }// fin funcion Constructora RedesSociales

  function Persona(id, nombre, redes_sociales){
    this.id = id;
    this.nombre = nombre;
    this.redes_sociales = redes_sociales || [];
  }//Fin funcion constructora Persona

  Persona.prototype.agregarRedSocial = function(redSocial){
    this.redes_sociales.push(redSocial);
  }//fin funcion agregarRedSocial

  //crear los objetos de redes Sociales
  let r1 = new RedesSociales('Twitter', '@juanduran85');
  let r2 = new RedesSociales('GitHub', 'JuanDuran85');

  //creamos el objeto Persona
  let p1 = new Persona(808080,'Juan',[r1,r2]);
  console.log(p1);

  let r3 = new RedesSociales('Facebook', 'JuanCDuranR');
  p1.agregarRedSocial(r3);
  console.log(p1);
}//fin metodo crearRedesSociales


let crearProyectos = () =>{
  function Personas(nombre){
    this.nombre = nombre;
  }// fin funcion Constructora Personas

  function Proyectos(nombre, personas){
    this.nombre = nombre;
    this.personas = personas || [];
  }//Fin funcion constructora Proyectos

  Proyectos.prototype.agregarPersonas = function(personas){
    this.personas.push(personas);
  }//fin funcion agregarPersonas

  //crear los objetos de personas
  let persona1 = new Personas('Gustavo');
  let persona2 = new Personas('Moises');

  //creamos el objeto Persona
  let proyecto1 = new Proyectos('Desarrollo Web',[persona1,persona2]);
  console.log(proyecto1);

  let persona3 = new Personas('Paula');
  proyecto1.agregarPersonas(persona3);
  console.log(proyecto1);
}//fin crear proyectos
