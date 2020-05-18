'use strict'

const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
];

const [{ name: name1, time:time1 },{name: name2, time:time2 }, { name: name3, time:time3 }, { name: name4, time:time4 }, {name: name5, time:time5 }] = users


console.log("----------Reto 2------------")
console.log(name1,time1)
console.log(name2,time2)
console.log(name3,time3)
console.log(name4,time4)
console.log(name5,time5)