'use strict'

const calculadorModeloCaja = (tipo, ancho, padding, borde)=> tipo ? ancho-(padding+padding+borde+borde) : ancho;

var borderBox= true;
var ancho = 100;
var padding = 2;
var borde = 4;

var tamañoBox = calculadorModeloCaja(borderBox, ancho, padding, borde);

console.log(`el ancho del contenido es ${tamañoBox}`);
