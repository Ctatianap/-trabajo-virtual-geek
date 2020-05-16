'use strict'

fetch('https://api.rand.fun/number/integer?max=20&min=1')
  .then(response => response.json())
  .then(data => document.querySelector("#exercise1").innerHTML = data.result);