'use strict'

document.querySelector("body").addEventListener("keypress", (e) =>{
    
    
    if (e.keyCode === 114){
        e.currentTarget.className = ""
        e.currentTarget.classList.add("rosa")

    }else if (e.keyCode === 109){
        e.currentTarget.className = ""
        e.currentTarget.classList.add("morado")
    }

})
