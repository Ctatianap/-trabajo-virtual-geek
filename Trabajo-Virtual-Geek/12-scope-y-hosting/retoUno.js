'use strict'

let message = 'El resultado será A';

function changeMessage() {
  message = 'El resultado será B';
}

changeMessage();

console.log(message);

// El resultado será B (porque ejecuta la función que cambia el mensaje y luego la imprime en consola)

/* let message = 'El resultado será A';

function changeMessage() {
  message = 'El resultado será B';
}

console.log(message); */

//El resultado será A porque no ejecuta la función sino que toma la variable global y la imprime 

/* let message = 'El resultado será A';

function changeMessage() {
  let message = 'El resultado será B';
}

changeMessage();

console.log(message); */

// El resultado será A (porque aunque ejecuta la función la variable que usa solo esta en el alcance de la funcion por tanto muestra la global)
