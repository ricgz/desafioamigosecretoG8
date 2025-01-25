// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listadoAmigos = [];
let listadoAmigosSorteados = [];
let amigosMinimos = 3;

// reglas de validacion de ingreso de nombre de amigos
function validarIngresoAmigo(nombre){
    return (nombre == "" ? false : true);
}

// agrega el amigo ingresado a la lista (array) listadoAmigos
// si se cumplen las reglas de ingreso
function agregarAmigo() {
    let InputAmigo = document.getElementById("amigo");
    document.getElementById("resultado").innerHTML = '';

    if (validarIngresoAmigo(InputAmigo.value)){
        listadoAmigos.push(InputAmigo.value);
        InputAmigo.value = ""; // limpio el campo de ingreso
        InputAmigo.focus();     // dejo el foco en el campo para un nuevo ingreso
        actualizarListadoAmigos();   // muestro la lista de amigos actualizada
    }else{
        //.. si el usuarios ingresa un nombre vacio...
        alert("Debe ingresar un nombre valido!");
        InputAmigo.focus();
    } 
}

// muestra un listado al usuaio de los amigos ingresados
function actualizarListadoAmigos(){
    let listadoHTML = document.getElementById("listaAmigos"); // obtengo el elemento html donde mostrar la lista
    let nuevaListaHtml = '';

    console.log(listadoAmigos); 

    // genero listado Html
    for (let i = 0; i < listadoAmigos.length; i++){
        nuevaListaHtml += `<li>${listadoAmigos[i]}</li>`;
    }

    listadoHTML.innerHTML =  nuevaListaHtml; // sobreescribo el listado html (borro contenido anterior)
}

// Se sortea un amigo que no a sido sorteado con anterioridad
function sortearAmigo(){
    if(listadoAmigos.length >= parseInt(amigosMinimos)){ // si hay al menos X amigos ingresados, podemos sortear
        let resultado = document.getElementById("resultado"); // obten
        let amigoSorteado = listadoAmigos[Math.floor(Math.random() * listadoAmigos.length)];
        
        document.getElementById("listaAmigos").innerHTML = ''; // retiro la lista de amigos visible.

        if(listadoAmigosSorteados.length == listadoAmigos.length){ // si ya se sortearon todos los amigos...
            resultado.innerHTML = 'Ya se sortearon todos los amigos!';
        }else{
            
            if(listadoAmigosSorteados.includes(amigoSorteado)){
                //console.log('Buscando otro amigo...');
                return sortearAmigo(); // busco otro si el que salio ya fue sorteado.
            }else{
                console.log("amigo sorteado: " + amigoSorteado);
                listadoAmigosSorteados.push(amigoSorteado); // registro el amigo sorteado
                resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
            }
        }
    }else{
        resultado.innerHTML = `Deben haber al menos ${amigosMinimos} amigos ingresados!`;
    }
}
