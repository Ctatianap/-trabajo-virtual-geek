'use strict'

const geekGirl1 = {
    name: 'Susana',
    age: 34,
    occupation: 'Periodista'
};

const geekGirl2 = {
    name: 'Rocío',
    age: 24,
    occupation: 'Actriz'
};

document.querySelector("#exercise1").innerHTML += `<p> 
                                       Mi nombre es ${geekGirl1.name}, 
                                       tengo ${geekGirl1.age} años y
                                       soy ${geekGirl1.occupation} </p>
                                       <p> 
                                       Mi nombre es ${geekGirl2.name}, 
                                       tengo ${geekGirl2.age} años y
                                       soy ${geekGirl2.occupation} </p>`
