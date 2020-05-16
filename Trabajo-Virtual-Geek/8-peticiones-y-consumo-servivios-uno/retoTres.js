'use strict'



function buscadorUsuario(){

    let username = document.querySelector("#gitHub-user").value

    fetch(`https://api.github.com/users/${username}?` )
    .then(response => response.json())
    .then(data => {
        document.querySelector('#result').innerHTML = `<h3>Resultados</h3>
                                                       <p><strong>Nombre</strong></p>
                                                       <p>${data.name}</p>
                                                       <p><strong>Foto</strong></p>
                                                       <img src="${data.avatar_url}" alt="avatarUser"> 
                                                       <p><strong>Número de repositorios</strong></p>
                                                       <p>${data.public_repos}</p>`
       
        console.log(data)
      
    });
}

document.querySelector('#btn-buscar').addEventListener('click', buscadorUsuario);    
  