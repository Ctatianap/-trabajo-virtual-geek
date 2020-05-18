'use strict'

const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56},
    {name: 'Argus Filch', time: 78}
];

const [user1,user2,user3,user4,user5]= users

const win = {...user1, win:1} 


console.log("----------Reto 4------------")
console.log(win)