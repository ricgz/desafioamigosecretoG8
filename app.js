// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listadoAmigos = [];
let listadoAmigosSorteados = [];
let amigosMinimos = 3;

// reglas de validacion de ingreso de nombre de amigos
function validarIngresoAmigo(nombre){
    return (nombre == "" ? false : true);
}


function agregarAmigo() {
    let InputAmigo = document.getElementById("amigo");
    document.getElementById("resultado").innerHTML = '';

    if (validarIngresoAmigo(InputAmigo.value)){
        listadoAmigos.push(InputAmigo.value);
        amigosingresados = listadoAmigos.length;
        InputAmigo.value = "";
        InputAmigo.focus();
        actualizarListadoAmigos();
    }else{
        alert("Debe ingresar un nombre valido!");
        InputAmigo.focus();
    } 
}

function actualizarListadoAmigos(){
    let listadoHTML = document.getElementById("listaAmigos");
    listadoHTML.innerHTML = '';

    console.log(`Amigos ingresados ${listadoAmigos.length}`);
    console.log(listadoAmigos); 

    for (let i = 0; i < listadoAmigos.length; i++){
        listadoHTML.innerHTML += `<li>${listadoAmigos[i]}</li>`;
    }

}


function sortearAmigo(){
    if(listadoAmigos.length >= parseInt(amigosMinimos)){
        let resultado = document.getElementById("resultado");
        let amigoSorteado = listadoAmigos[Math.floor(Math.random() * listadoAmigos.length)];
        document.getElementById("listaAmigos").innerHTML = '';

        if(listadoAmigosSorteados.length == listadoAmigos.length){
            resultado.innerHTML = 'Ya se sortearon todos los amigos!';
        }else{
            console.log("amigo sorteado: " + amigoSorteado);

            if(listadoAmigosSorteados.includes(amigoSorteado)){
                return sortearAmigo();
            }else{
                listadoAmigosSorteados.push(amigoSorteado);
                resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
            }
        }
    }else{
        resultado.innerHTML = `Deben haber al menos ${amigosMinimos} amigos ingresados!`;
    }
}
