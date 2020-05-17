'use strict'

let counterGrapes = 0;

const incrementAndShowCounterGrapes = () => {
  counterGrapes++;
  if(counterGrapes<=12){
        const time = document.querySelector('.grapes');
        time.innerHTML = counterGrapes;
  }
  
}

setInterval(incrementAndShowCounterGrapes, 1000);