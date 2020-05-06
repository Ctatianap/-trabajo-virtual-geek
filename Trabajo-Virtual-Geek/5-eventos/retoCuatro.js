'use strict'

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


let listaPeliculas = `
<ul>
    <li>${inception}</li>
    <li>${theButterFlyEffect}</li>
    <li>${eternalSunshineOfTheSM}</li>
    <li>${blueVelvet}</li>
    <li>${split}</li>
</ul>`;



document.querySelector("#btn-empezar").addEventListener("click", () =>{
   
    document.getElementById("lista-pelis").innerHTML= listaPeliculas;
    document.querySelectorAll("li").forEach(i => i.addEventListener('click', (e) =>{
        console.log(e.currentTarget.innerHTML);
    }));
});
 
