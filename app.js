/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";
*/

//Video 4 pate 2
let numeroSecreto = 0; // modificado video 6 parte 3
let intentos = 0; //video 3 parte 3 modificado video 6 parte 3
let listaNumerosSorteados = []; //video 4 parte 4
let numeroMaximo = 10; //video 5 parte 4

console.log(numeroSecreto);

//Video 5 parte 1
/*function intentoDeUsuario() {
  alert("Click desde el botón");
  return;
}
*/
//Video 2 parte 2

/*
Esta función es reutilizable, recibe como parámetros el elemento HTML (o selector) y el texto que insertaremos en dicho elemento HTML
*/
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
/*
asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", "Indica un número del 1 al 10");
*/
//Video 4 parte 2

function generarNumeroSecreto() {
  //return Math.floor(Math.random() * 10) + 1; comentado en video 4 parte 4
  //Return significa que cuando la función se ejecute, nos devolverá un valor.

  //Video 5 parte 4
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //modificado en video 5 parte 4

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  //Si ya sorteamos todos los números

  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    document.querySelector("#valorUsuario").setAttribute("disabled", "true");
  } else {
    //video 4 parte 4

    //Si el número generado está incluido en la lista.
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto(); //Recursividad, la función se llama a sí misma para resolver el problema del número que ya existe.
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

//video 6 parte 2
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //para obtener el valor del input valorUsuario.

  //video 2 parte 3
  if (numeroDeUsuario === numeroSecreto) {
    //video 3 parte 3
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("Disabled"); //video 5 parte 3
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

//video 5 parte 3 Limpiar el campo

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = ""; //ID del input
}

//video 6 parte 3

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  //Generar el número aleatorio
  numeroSecreto = generarNumeroSecreto();
  //Inicializar el número intentos
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true"); //video 6 parte 6
}

condicionesIniciales();
