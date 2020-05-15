'use strict'

console.log('--------Ejercicio 8-----------');

const tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
  ];


const li = document.querySelectorAll('li');

li[0].innerHTML = `${(tasks[0].name)}`



if(tasks[0].completed){
    li[0].classList.add('tachado')

}   

for (let i=0; i < li.length; i ++){

    li[i].innerHTML = `${(tasks[i].name)} <input type="checkbox" id="cbox${i}" value="${i}_checkbox"> `

    if(tasks[i].completed){
        li[i].classList.add('tachado')
        document.querySelector(`#cbox${i}`).checked  = true
    }


}
//------------------CheckBox---------------------------------/


function isCheked (){
    

    for (let i=0; i < li.length; i ++){

    if (document.querySelector(`#cbox${i}`).checked){
        li[i].className = " "
        li[i].classList.add('tachado')
        tasks[i].completed = true
        
    }
    if (!(document.querySelector(`#cbox${i}`).checked) ){
        li[i].className = " "
        li[i].classList.add('normal')
        tasks[i].completed = false
        
    }
}

}



for (let i=0; i < li.length; i ++){
document.querySelector(`#cbox${i}`).addEventListener("click", isCheked)
}