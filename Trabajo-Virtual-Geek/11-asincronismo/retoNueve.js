'use strict'

let countSleep = 0

const msgSleep = () => {
    countSleep ++
    
    const msg = document.querySelector('#exercise9');
    msg.classList.remove("hidden");
    msg.classList.add('ventana');
  }
  
  setTimeout(msgSleep, 10000);

document.querySelector("#btn-no").addEventListener('click',()=>{
    
    countSleep = 0
    document.querySelector('#exercise9').classList.toggle("hidden");
    
    setTimeout(msgSleep, 10000);
    
})