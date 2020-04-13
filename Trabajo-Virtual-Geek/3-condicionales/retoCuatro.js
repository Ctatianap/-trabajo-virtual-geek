'use strict'

const firtsAgeDog = 15;
let secondAgeDog = firtsAgeDog + 9;
let thirdAgeDog = secondAgeDog + 5;
const ageDog = 6;
let ageHumansDog = 0;

if (ageDog <= 1){
    
    ageHumansDog = ageDog * firtsAgeDog;
    console.log(`Tu perro tiene ${ageHumansDog} años en años humanos`);
}else if (ageDog === 2 ){
    
    console.log(`Tu perro tiene ${secondAgeDog} años en años humanos `);
}else if (ageDog === 3 ){
    
    console.log(`Tu perro tiene ${thirdAgeDog} años en años humanos `);
}else{

    ageHumansDog = ((ageDog - 3) * 5 ) + thirdAgeDog;
    console.log(`Tu perro tiene ${ageHumansDog} años en años humanos `);

}


