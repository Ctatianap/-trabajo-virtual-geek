'use strict'

console.log('<<<<-------Ejercicio 6--------');

document.querySelector("#btn-exercise6").addEventListener("click",()=>{
    
    let arrExercise6 =[]

    arrExercise6.push (document.querySelector("#movie").value)
    arrExercise6.push (document.querySelector("#book").value)

    alert(`¡A mí también me encantó ${arrExercise6[0]}! y ${arrExercise6[1]}! Tenemos mucho en común, humana.`)
    
    
    console.log('di click')
    console.log(arrExercise6)

})

