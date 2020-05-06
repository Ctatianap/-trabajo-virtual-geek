'use strict'

document.querySelectorAll('li').forEach(i => i.addEventListener('click', (e) =>{
        
    e.currentTarget.classList.toggle('teacher--selected') ;
}));
     

document.querySelectorAll('.favorite').forEach(i => i.addEventListener('click', (e) =>{
        
    if(e.currentTarget.innerHTML.includes('Añadir')){
      e.currentTarget.innerHTML ='Quitar';
    }else{
      e.currentTarget.innerHTML ='Añadir';
    }
}));