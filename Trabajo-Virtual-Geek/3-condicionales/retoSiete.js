'use strict'

const year = 2019 ;



if(year % 4 === 0 ){
    console.log('este año es biciesto');
}else if ((year+1) % 4 === 0 ) {
    console.log(`El proximo año biciesto es ${year + 1}`);
}else if ((year+2) % 4 === 0 ) {
    console.log(`El proximo año biciesto es ${year + 2}`);
}else {
    console.log(`El proximo año biciesto es ${year + 3}`);
};
