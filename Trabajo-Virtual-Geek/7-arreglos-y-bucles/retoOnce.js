'use strict'

console.log('--------Ejercicio 11-----------');


function arbolNavidad (num ){
    let str = "▲"
    let spc = " "
    let acc = num
    console.log(spc.repeat(num) + "★") 

    for(let i = 1; i < num +1 ; i++){
        
        spc = " ".repeat(acc)
        acc -= 1
        console.log(spc + str) 
        str += "▲".repeat(2)
    }
    console.log(spc.repeat(num)+ "||") 
}

arbolNavidad (10)
