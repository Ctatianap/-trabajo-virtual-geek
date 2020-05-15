'use strict'

console.log('--------Ejercicio 1-----------');

function workWithMovies () {
   let movies = [ 
    'Peli1',
    'Peli2',
    'Peli3'
]

console.log(movies)
movies[2]= 'OtraPeli';
console.log(movies)
movies[2]= 'Peli4';
console.log(movies) 
}

workWithMovies()