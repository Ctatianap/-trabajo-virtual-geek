'use strict'


const createMsg = () => {
    const msg = document.querySelector('.hidden');
    msg.classList.remove("hidden");
    msg.classList.add('ventana');
  }
  
  setTimeout(createMsg, 15000);