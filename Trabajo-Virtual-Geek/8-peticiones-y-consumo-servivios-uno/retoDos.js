'use strict'

function mostrar(){
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });}
  
  document.querySelector('#btn-mostrar').addEventListener('click', mostrar);