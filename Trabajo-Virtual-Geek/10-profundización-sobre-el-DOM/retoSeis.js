'use strict'
 
let listaColores =['combo','blanco','azul', 'rojo', 'verde', 'amarillo', 'rosa']

for(let i=0 ; i<100 ; i++){
    
    const newP = document.createElement('p');
    const newContent = document.createTextNode(`He aprendido bien cómo funcionan los bucles`);
    newP.appendChild(newContent)

    document.querySelector("#parrafos").appendChild(newP)

    const newselect = document.createElement('select');

    for (let i=0; i< listaColores.length; i++){
        const option = document.createElement('option')
        option.appendChild(document.createTextNode(`${listaColores[i]}`));
        newselect.appendChild(option)
    }
        document.querySelector("#parrafos").appendChild(newselect)
    

        newselect.addEventListener("change", (e)=>{
            console.log (e.target.value)
                let value = e.target.value;
            
                let p = document.querySelector("p");
                           
                
                if ((value === "blanco")){
                    p.style.color= "white";
            
                }else if((value === "azul")){
                    p.style.color= "#2196F3";
            
                }else if(value === "rojo"){
                    p.style.color= "red";   
                   
                }else if(value === "verde"){
                    p.style.color= "#8BC34A";

                }else if(value === "amarillo"){
                    p.style.color= "yellow";  
                }else{
                    p.style.color= "pink";    
                   
                }
            
                
            
            })
  
}