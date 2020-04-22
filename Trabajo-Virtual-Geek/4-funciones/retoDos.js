function promedioNumeros(num1 , num2, num3, num4){
    return (num1 + num2 + num3 + num4) / 4;

}

var num1 = parseInt(prompt("Ingresa un número"));
var num2 = parseInt(prompt("Ingresa un segundo número"));
var num3 = parseInt(prompt("Ingresa un tercer número"));
var num4 = parseInt(prompt("Ingresa un último número"));


var media = promedioNumeros(num1, num2, num3, num4);

console.log(`La media de ${num1}, ${num2}, ${num3} y ${num4} es =  ${media}`);