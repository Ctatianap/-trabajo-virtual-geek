'use strict'

let contador = {
    valorInicial:0,
    valorActual: 0,
    valorMinimo: 0,
    valorMaximo: 0
};


contador.aumentarValor= function (){
    return contador.valorActual += 1
};
contador.disminuirValor = function (){
    return contador.valorActual -= 1
};
contador.reestablecerValor = function (){
    return contador.valorActual = contador.valorInicial
};

document.querySelector("#btn-sum").addEventListener('click', () => {
    
    document.querySelector("#valorActual").innerHTML = `${contador.aumentarValor()}`
});

document.querySelector("#btn-sustract").addEventListener('click', () => {
    
    document.querySelector("#valorActual").innerHTML = `${contador.disminuirValor()}`
});

document.querySelector("#btn-restore").addEventListener('click', () => {
    
    document.querySelector("#valorActual").innerHTML = `${contador.reestablecerValor()}`
})


