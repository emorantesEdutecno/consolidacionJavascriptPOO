export default{
  cargarElementos : () =>{
    console.log('Funciona Onload');
    let elBotonPersona = document.getElementById('botonPersona');
    elBotonPersona.addEventListener('click', crearMascotasPersonas);

    let elBotonRedSocial = document.getElementById('botonRedSocial');
    elBotonRedSocial.addEventListener('click', crearRedesSociales);

    let elBotonProyectos = document.getElementById('botonProyectos');
    elBotonProyectos.addEventListener('click', crearProyectos);

    let elBotonModulo = document.getElementById('botonModulo');
    elBotonModulo.addEventListener('click', probarModulo);

  }
}
