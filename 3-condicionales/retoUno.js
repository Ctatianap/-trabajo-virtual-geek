'use strict'


const emptybox= document.querySelector('.emptyBox');
const avatar = `<img src='http://placehold.it/300x300'>`;
let other = `<img src='http://placehold.it/300x300'>`;


emptybox.innerHTML = other || avatar;



