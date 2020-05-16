'use strict'

function mostrarPerritos(){

    const createPromise = () => 
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json());

    var promises =[]
    var num = document.querySelector("#num").value
    console.log(num)
    for (let i = 0; i < num; i++){
        promises.push(createPromise())
    }

    Promise.all(promises)
    .then(responses => {
        for (let i = 0; i < responses.length; i++) {
            
            document.querySelector('#perritos').innerHTML +=`<br><img class="dog${i}" src="${responses[i].message}" alt="Dog">`;

    }
});
}

document.querySelector("#btn-mostrar-perritos").addEventListener('click',mostrarPerritos);