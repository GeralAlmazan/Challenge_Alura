// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se declara la variable del array
let listaDeNombres = [];

//Función para agregar amigo secreto
function agregarAmigo(){

    //Se da de alta las variables que se ocuparan
    let nombreInput=document.getElementById("nombreInput");
    let mensajeError= document.getElementById("mensajeDeError");
    let nombre = nombreInput.value.trim();

    //Realiza la validación en caso de que el usuario quiera ingresar un dato vacio el sistema le mandara la alerta de ingresar un nombre valido, en caso de que cumpla la condición lo agrega a la lista

    if(nombre){
        listaDeNombres.push(nombre);
        console.log(`El nombre ${nombre} se agrego con éxito a la lista`);
        //Limpia el campo de captura 
        nombreInput.value = ""; 

        //Se agrega la llamada a la función para actualizar la lista
        actualizarListaAmigoSecreto();
    }else{
        //Mostrara mensaje de error
       alert("Debe de ingresar un nombre valido");
    }

}


//Se crea función que actualice la lista

function actualizarListaAmigoSecreto(){
    
    //Selecciona el elemento <ul con el id listaAmigos> del Dom
    let lista = document.getElementById("listaAmigos");
    //Limpia el contenido del elemento <ul> antes de actualizarlo
    lista.innerHTML= "";
    //Itera sobre el array "nombre" 
    listaDeNombres.forEach(nombre=> {
        //crea un nuevo elemnto <li> para cada nombre
        let li= document.createElement("li");
        //Establece el texto de <li> en el nombre correspondiente
        li.textContent = nombre;

        //Añade el <li> al elemento <lu>
        lista.appendChild(li);
    });
}