'use strict'

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


let listaPeliculas = `
<ul id="EjercicioSiete">
    <li>${inception}</li>
    <li>${theButterFlyEffect}</li>
    <li>${eternalSunshineOfTheSM}</li>
    <li>${blueVelvet}</li>
    <li>${split}</li>
</ul>`;



document.querySelector("#btn-empezar-2").addEventListener("click", () =>{
    
    document.getElementById("lista-pelis-2").innerHTML= listaPeliculas;
    document.querySelector("#EjercicioSiete").addEventListener('click', (e) =>{
        console.log(e.target.innerHTML)
    });
});