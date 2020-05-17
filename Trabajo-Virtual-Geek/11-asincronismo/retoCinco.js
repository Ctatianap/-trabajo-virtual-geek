'use strict'

let counterText = 0;
let counterTextMin = 0;

const incrementAndShowCounterText = () => {
    counterText++;

    if(counterText<=59 && counterTextMin === 0){
        const time = document.querySelector('.text');
        time.innerHTML = `Escrito hace ${counterText} segs`
    }else if (counterText > 59){
        counterText = 0
        counterTextMin ++
        const time = document.querySelector('.text');
        time.innerHTML = `Escrito hace  ${counterTextMin} min `
    
    }
  
}

setInterval(incrementAndShowCounterText, 1000);