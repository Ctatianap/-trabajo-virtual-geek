'use strict'

const exerciseNine = document.querySelector('.exercise-nine');
const name = 'Cindy Tatiana pabón Lozano';
const lengthName = name.length;

const content = `El nombre de mi compañera es ${name}, y está compuesto por ${lengthName} caracteres`;

exerciseNine.innerHTML = `<h2> ${content} </h2>`;
