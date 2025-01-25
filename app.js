// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listadoAmigos = [];

// reglas de validacion de ingreso de nombre de amigos
function validarIngresoAmigo(nombre){
    return (nombre == "" ? false : true);
}

function agregarAmigo() {
    InputAmigo = document.getElementById("amigo");

    if (validarIngresoAmigo(InputAmigo.value)){
        listadoAmigos.push(InputAmigo.value);
        InputAmigo.value = "";
        InputAmigo.focus();
        console.log(listadoAmigos);
    }else{
        alert("Debe ingresar un nombre valido!");
        InputAmigo.focus();
    } 
}
