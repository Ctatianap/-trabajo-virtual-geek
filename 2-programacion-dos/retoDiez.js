'use strict'

const age = document.querySelector('.user-age');
 
const daysYear = 365;
const hoursDay = 24;
const totalHours= parseInt(age.innerHTML) * daysYear * hoursDay;

console.log( `He vivido: ${totalHours} horas`);