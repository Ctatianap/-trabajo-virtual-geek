'use strict'

const numbers = [1, 2, 3];


for (let i = 0; i < numbers.length ; i++){
    const newLi = document.createElement('li');
    const newContent = document.createTextNode(`${numbers[i]}`);
    newLi.appendChild(newContent)

document.querySelector("#lista").appendChild(newLi)
}

