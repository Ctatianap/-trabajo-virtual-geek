'use strict'

function buscarNombre(){
    let name= document.querySelector("#nameSW").value
    
    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then(response => response.json())
    .then(data => {
        
        document.querySelector("#listName").innerHTML += ` `
        for(let i=0; i< data.results.length; i++){
            document.querySelector("#listName").innerHTML += `<li>${data.results[i].name}</li>`
        }
    
})

}

document.querySelector("#btn-buscarSW").addEventListener("click", buscarNombre)