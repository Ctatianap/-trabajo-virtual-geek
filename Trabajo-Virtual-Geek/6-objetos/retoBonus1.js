'use strict'


function aleatorio(min, maxi){
    let resultado = Math.floor(Math.random()*(maxi - min +1))+min;  

    // if(resultado %2 ==0){
    
    //     return resultado;

    // }else (resultado %2 == 1){
    //     return 
    // }
   
}

document.getElementById("btn-upDate").addEventListener('click', () =>{

    let valorSelect = document.querySelector("#mood").value
    
    
    if(valorSelect === "1"){
        document.querySelector("#carita").innerHTML =  `:)`
    }else{
        document.querySelector("#carita").innerHTML =  `:(`
    }
    
    let resultado = Math.floor(Math.random()*(100 - 0 +1))+0; 
    console.log(resultado)

    if(resultado %2 ==0){
        document.querySelector("#container").className = ""
        document.querySelector("#container").classList.add("amarillo")
    }else{
        document.querySelector("#container").className = ""
        document.querySelector("#container").classList.add("naranja")
    }
    


})