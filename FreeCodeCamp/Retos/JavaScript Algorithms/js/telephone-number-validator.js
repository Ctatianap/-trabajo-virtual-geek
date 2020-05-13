function telephoneCheck(str) {
    console.log(str)
const myRegExp = /^(1 |1|)(\d{3}|\(\d{3}\))( |-|)(\d{3})( |-|)(\d{4}$)/
return myRegExp.test(str);
   
}


//telephoneCheck("555-555-5555");
export {telephoneCheck}