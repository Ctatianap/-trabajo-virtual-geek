'use strict'

let counterCronometro = 0;

const ShowCounterCronometro = () => {
  counterCronometro++;
  const time = document.querySelector('.cronometro');
  time.innerHTML = counterCronometro;
}

let temp = setInterval(ShowCounterCronometro, 1000);

document.querySelector("#btn-stop").addEventListener('click',()=>{
    
    clearInterval(temp)
})

document.querySelector("#btn-start").addEventListener('click',()=>{
    console.log('di click')
    temp = setInterval(ShowCounterCronometro, 1000);
})