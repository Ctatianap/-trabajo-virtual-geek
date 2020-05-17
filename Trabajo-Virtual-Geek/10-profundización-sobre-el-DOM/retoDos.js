'use strict'


document.getElementById('ciudades').addEventListener("change", (e)=>{
console.log (e.target.value)
    let value = e.target.value;

    let img1 = document.querySelector("#img-1");
    let img2 = document.querySelector("#img-2");
    let img3 = document.querySelector("#img-3");

    
    if ((value === "1")){
        img1.src = "/madrid.jpg"
        img2.src = "/madrid.jpg"
        img3.src = "/madrid.jpg"

    }else if(value === "2"){
        img1.src = "/paris.jpg"
        img2.src = "/paris.jpg"  
        img3.src = "/paris.jpg"    
       
    }else{
        img1.src = "/new-york.jpg"
        img2.src = "/new-york.jpg"  
        img3.src = "/new-york.jpg"    
       
    }

    

})