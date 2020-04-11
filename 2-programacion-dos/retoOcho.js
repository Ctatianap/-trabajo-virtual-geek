'use strict'

const exerciseEight = document.querySelector('.exercise-eight');

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';


const content=
`<ul>
    <li><img src= "${firstDogImage}"> ${firstDogName} </li>
    <li><img src= "${secondDogImage}"> ${secondDogName} </li>
    <li><img src= "${thirdDogImage}"> ${thirdDogName} </li>
</ul>`;

exerciseEight.innerHTML = content;