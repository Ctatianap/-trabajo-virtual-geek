'use strict'

const geekGirl1 = {
    name: 'Susana',
    age: 34,
    occupation: 'Periodista',
    run: (practice) => `estoy ${practice}`,
    runAMarathon: (distance) => `un maraton de ${distance} kilometros`
};

geekGirl1.showBio = function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}`
}

const geekGirl2 = {
    name: 'Rocío',
    age: 24,
    occupation: 'Actriz'
};

geekGirl2.showBio = function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}`
}

alert (geekGirl1.showBio())
alert (geekGirl2.showBio())