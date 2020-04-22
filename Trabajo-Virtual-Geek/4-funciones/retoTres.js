function calcularIva(numero){
    var iva = numero * 0.21; 
    return iva;
    
}

var precio = parseInt(prompt("Ingresa un precio"));

var ivaProducto = calcularIva(precio);
var total = precio + ivaProducto;

console.log(`Precio sin iva: ${precio}, IVA: ${ivaProducto}, y Total: ${total}  `)