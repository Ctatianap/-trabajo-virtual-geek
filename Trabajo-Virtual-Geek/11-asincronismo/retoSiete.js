'use strict'

let counterGrapes = 0;
let temp

const incrementAndShowCounterGrapes = () => {
    counterGrapes++;
    const time = document.querySelector('.grapes');
    time.innerHTML = counterGrapes;

  if(counterGrapes === 12){
    clearInterval(temp)
  }
  
}

temp = setInterval(incrementAndShowCounterGrapes, 1000);