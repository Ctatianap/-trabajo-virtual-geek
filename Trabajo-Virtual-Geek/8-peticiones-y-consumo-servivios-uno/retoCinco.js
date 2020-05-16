'use strict'

let breeds;

fetch('https://dog.ceo/api/breeds/list')
    .then(breedsResponse => breedsResponse.json())
    .then(breedsData => {
        breeds = breedsData.message;
        return fetch(`https://api.rand.fun/number/integer?max=${breeds.length}&min=0`);
    })
        .then(numberResponse => numberResponse.json())
        .then(numberData => {
            const index = numberData.result
            return fetch('https://dog.ceo/api/breed/' + breeds[index] + '/images/random');
    })
    
                .then(imageResponse => imageResponse.json())
                .then(imageData => {
                    const img = document.querySelector('#img');
                    img.src = imageData.message;
                    img.alt = 'Un perro';
  });