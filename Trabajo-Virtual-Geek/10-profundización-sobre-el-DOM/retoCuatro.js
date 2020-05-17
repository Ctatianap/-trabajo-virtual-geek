'use strict'

var parrafo1 = document.getElementById("p1")
var parrafo2 = document.getElementById("p2")
var parrafo3 = document.getElementById("p3")

var alturaParrafo1 = parrafo1.offsetHeight;
var alturaParrafo2 = parrafo2.offsetHeight;
var alturaParrafo3 = parrafo3.offsetHeight;

console.log(alturaParrafo1,alturaParrafo2,alturaParrafo3)

p1.style.height = `${alturaParrafo1/3}px`;
p1.style.overflow=  "hidden";
p2.style.height = `${alturaParrafo2/3}px`;
p2.style.overflow=  "hidden";
p3.style.height = `${alturaParrafo3/3}px`;
p3.style.overflow=  "hidden";