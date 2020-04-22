function calculadorModeloCaja (tipo, ancho, padding, borde){

    if (tipo){
        return ancho-(padding+padding+borde+borde) 
       
    }

    return ancho;
   
}

var borderBox= true;
var ancho = 100;
var padding = 2;
var borde = 4;

var tamañoBox = calculadorModeloCaja(borderBox, ancho, padding, borde);

console.log(`el ancho del contenido es ${tamañoBox}`);


