'use stric'
import {palindrome} from './palindrome-checker.js';
import {convertToRoman} from './roman-numeral-converter.js';
import {rot13} from './caesars-cipher.js';
import {telephoneCheck} from './telephone-number-validator.js'
import {checkCashRegister} from './cash-register.js';


// --------------Section Palindrome checker-----------//

document.querySelector("#btn-palindrome").addEventListener('click', () => {
  let wordInput = document.querySelector("#inputPalindrome").value  
  if (wordInput === ""){
      return false
  }
    
    if (palindrome(wordInput) && palindrome(wordInput) !==""){
        document.querySelector("#divPalindromeWords").innerHTML+= `<p> ${wordInput} is palindrome :)</p>`
    
    }else{
        document.querySelector("#divPalindromeWords").innerHTML+= `<p> ${wordInput} isn't palindrome :( </p>`
    }

    

})

// --------------Section Roman numeral converter-----------//


document.getElementById("btn-romanNumber").addEventListener("click", () =>{
    
let numInput = parseInt(document.querySelector("#inputRomanNumber").value)


  if (numInput === "" || numInput < 0 ){
    document.querySelector("#divRomanNumber").innerHTML+= `<p> Type a natural number </p>`
  }else{

      document.querySelector("#divRomanNumber").innerHTML+= `<p> ${numInput} is ${convertToRoman(numInput)} in roman :)</p>`
  }
    
    
})

// --------------Section Caesars Cipher-----------//

document.getElementById("btn-CaesarCipher").addEventListener("click", () =>{
    
    let phraseInput = document.querySelector("#inputCaesarCipher").value.toUpperCase()
   
    
    if ( phraseInput === ""){
        
        document.querySelector("#divCaesarCipher").innerHTML+= `<p> Enter a phrase</p>`
    
    }else {

        document.querySelector("#divCaesarCipher").innerHTML+= `<p> ${rot13(phraseInput)}</p>`
    }
     
})

// --------------Section Telephone Number Validator-----------//


document.getElementById("btn-TelephoneNumber").addEventListener("click", () =>{
    
    let numTelephoneInput = document.querySelector("#inputTelephoneNumber").value

    // if (numTelephoneInput === ""){
    //     return false
    // }
      
    if (telephoneCheck(numTelephoneInput)&& telephoneCheck(numTelephoneInput) !==""){
        document.querySelector("#divTelephoneNumber").innerHTML+= `<p> yes, ${numTelephoneInput} this is a American phone number </p>`

    }else{
        document.querySelector("#divTelephoneNumber").innerHTML+= `<p> No, ${numTelephoneInput} this isn't a American phone number type other telephone number </p>`
    }

})

// --------------Section Cash Register-----------//

document.getElementById("btn-CashRegister").addEventListener("click", () =>{

    let selectValue = document.querySelector("#inputGroupSelect04").value
    console.log(selectValue)
    let price = 0;
    let cash = 0;
    let cid= []

    if(selectValue === "1"){
        price = 19.5;
        cash = 20;
        cid= [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]

        document.querySelector("#divCashRegister").innerHTML+= `${JSON.stringify(checkCashRegister(price,cash,cid))}`
    
    }else if(selectValue === "2"){

        price = 3.26;
        cash = 100;
        cid =  [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]

        document.querySelector("#divCashRegister").innerHTML+= `${JSON.stringify(checkCashRegister(price,cash,cid))}`
    
    }else if(selectValue === "3"){

        price = 7;
        cash = 10;
        cid = [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]

        document.querySelector("#divCashRegister").innerHTML+= `${JSON.stringify(checkCashRegister(price,cash,cid))}`
    
    }else if(selectValue === "4"){

        price = 18;
        cash = 20;
        cid = [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0.5], ['ONE', 2], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]

        document.querySelector("#divCashRegister").innerHTML+= `${JSON.stringify(checkCashRegister(price,cash,cid))}`
    
    }else if(selectValue === "5"){

        price = 20;
        cash = 50;
        cid = [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]

        document.querySelector("#divCashRegister").innerHTML+= `${JSON.stringify(checkCashRegister(price,cash,cid))}`
    }

    
    
})