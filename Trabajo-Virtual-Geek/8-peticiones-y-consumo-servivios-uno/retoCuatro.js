'use strict'


function buscadorRepoOrg(){

    let orgname = document.querySelector("#gitHub-org").value

    fetch(`https://api.github.com/orgs/${orgname}?`)
        .then(listResponse => listResponse.json())
        .then(listData => {
            return fetch(listData.repos_url);
         })
                .then(Response => Response.json())
                .then(data => {
                    document.querySelector('#result-org').innerHTML = `<h3>Resultados</h3>
                                                       <p><strong>Lista de Repositorios</strong></p>`
                    for(let i=0; i<data.length; i++){
                        document.querySelector('#result-org').innerHTML += `<p>${data[i].name}</p>`
                    }
                    
                console.log(data)
  });
}

document.querySelector('#btn-buscar-org').addEventListener('click', buscadorRepoOrg); 