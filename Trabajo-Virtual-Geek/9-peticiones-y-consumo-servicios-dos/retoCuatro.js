'use strict'

function buscarNombre(){
    let name= document.querySelector("#nameSW").value
    const r = localStorage.getItem(name);
    if (!r) {
    
    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(name, JSON.stringify(data.results));
        document.querySelector("#listName").innerHTML = ` `
        for(let i=0; i< data.results.length; i++){
            document.querySelector("#listName").innerHTML += `<li>${data.results[i].name}</li>`
        }
    
})
    } else {
        const data = JSON.parse(r)
        for(let i=0; i< data.length; i++){
            document.querySelector("#listName").innerHTML += `<li>${data[i].name}</li>`
        }
    }

}

document.querySelector("#btn-buscarSW").addEventListener("click", buscarNombre)