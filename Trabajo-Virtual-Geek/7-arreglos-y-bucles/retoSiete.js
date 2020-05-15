'use strict'

console.log('--------Ejercicio 7-----------');

let geekGirls =[
    {
        name: 'María',
        age: 29,
        profession: 'diseñadora'

    },
    {
        name: 'Lucía',
        age: 31,
        profession: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        profession: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        profession: 'actriz'
    },
    {
        name: 'Inmaculadora',
        age: 21,
        profession: 'diseñadora'
    }
    

]

function countGeekGirls (arr){

    console.log("El numero de geek girls en el listado es: " +arr.length) 
   
}

function averageAge (arr) {

    let acc = 0
    for(let i = 0; i < arr.length ; i ++){

        acc += arr[i].age
    }
    console.log ('la media de edad de listado es: ' + acc/arr.length)
    
}

function theYoungest (arr) {

    let mayor = 0
    let menor = 0
    let masJoven = ""

    for(let i = 0; i < arr.length ; i ++){

        if(arr[i].age > mayor ){
            mayor = arr[i].age
            menor = mayor
            
        }
        if (arr[i].age < menor ){
            menor = arr[i].age
            masJoven = arr[i].name
            
            
        }
              
    }
    console.log('la geek girl más joven es: '+ masJoven)
    
}

function countDesigners(arr){

    let diseñadoras = 0
    for(let i = 0; i < arr.length ; i ++){

        if(arr[i].profession ==="diseñadora"){
            diseñadoras += 1
        }
    }
    console.log('El número de geek girls que son diseñadoras es: ' + diseñadoras)
    //devuelve el número de geek girls que son diseñadoras.
}

countGeekGirls(geekGirls)
averageAge (geekGirls)
theYoungest (geekGirls)
countDesigners (geekGirls)

console.log ('--------Añadiendo ----------')

geekGirls.push({
    name: 'Tatiana',
    age: 25,
    profession: 'diseñadora'
})

countGeekGirls(geekGirls)
averageAge (geekGirls)
theYoungest (geekGirls)
countDesigners (geekGirls)