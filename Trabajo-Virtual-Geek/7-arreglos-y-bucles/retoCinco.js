'use strict'

console.log('--------Ejercicio 5-----------');

const numbers = [4,6,8,7,1];
const numbers2 = [5,4,6,3,8,7,1];
const numbers3 = [,8,17,5,14,6,11];
let acumulador = 0


for (let i=0; i < numbers.length; i++){

    acumulador += numbers[i];

}

console.log(numbers)
console.log("la media es: " + (acumulador/numbers.length))

//-----------Paso b--------------

numbers[5] = 9;
console.log(numbers)

//------------paso c -----------

function average (arr){

    let acumulador = 0    

    for (let i=0; i < arr.length; i++){
        acumulador += arr[i];
    }
    console.log("la media de la suma de ["+arr +"] es: " + (acumulador/arr.length))

}

average(numbers)
average(numbers2)

