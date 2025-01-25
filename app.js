// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listadoAmigos = [];


function agregarAmigo() {
    InputAmigo = document.getElementById("amigo");
    listadoAmigos.push(InputAmigo.value);

    InputAmigo.value = "";
    InputAmigo.focus();
    
    console.log(listadoAmigos);
}
