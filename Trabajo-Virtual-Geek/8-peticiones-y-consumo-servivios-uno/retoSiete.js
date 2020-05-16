'use strict'

fetch('https://api.rand.fun/number/integer?max=20&min=1')
  .then(response => response.html())
  .then(data => document.querySelector("#exercise1").innerHTML = data.result)
  .catch(error => console.log(`Ha sucedido un error: ${error}`));