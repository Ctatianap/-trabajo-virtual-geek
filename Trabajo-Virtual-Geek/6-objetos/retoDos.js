'use strict'

const geekGirl1 = {
    name: 'Susana',
    age: 34,
    occupation: 'Periodista',
    run: (practice) => `estoy ${practice}`,
    runAMarathon: (distance) => `un maraton de ${distance} kilometros`
};


document.querySelector("#exercise2").innerHTML += `<p> 
                                       Mi nombre es ${geekGirl1.name}, 
                                       tengo ${geekGirl1.age} años,
                                       soy ${geekGirl1.occupation} y 
                                       ${geekGirl1.run('corriendo')} 
                                       ${geekGirl1.runAMarathon(50)}
                                       </p>`