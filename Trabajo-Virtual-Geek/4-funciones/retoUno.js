function multiplicadorDosNumeros(num1 , num2){
    return num1 * num2;
}

var num1 = parseInt(prompt("Ingresa un numero"));
var num2 = parseInt(prompt("Ingresa otro numero"));

var multNums = multiplicadorDosNumeros(num1, num2);

console.log(` ${num1} x ${num2} = ${multNums}`);



