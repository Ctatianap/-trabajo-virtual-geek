function convertToRoman(num) {
  
  let numRomano = ""
  let count = num;

  while(count > 0){

    if (count >= 1000){
      count = count - 1000
      numRomano +='M'
    }else if (count >= 900){
      count = count - 900
      numRomano +='CM'
    }else if (count >= 500){
      count = count - 500
      numRomano +='D'
    }else if (count >= 400){
      count = count - 400
      numRomano +='CD'
    }else if (count >= 100){
      count = count - 100
      numRomano +='C'
    }else if (count >= 90){
      count = count - 90
      numRomano +='XC'
    }else if (count >= 50){
      count = count - 50
      numRomano +='L'
    }else if (count >= 40){
      count = count - 40
      numRomano +='XL'
    }else if (count >= 10){
      count = count - 10
      numRomano +='X'
    }else if (count >= 9){
      count = count - 9
      numRomano +='IX'
    }else if (count >= 5){
      count = count - 5
      numRomano +='V'
    }else if (count >= 4){
      count = count - 4
      numRomano +='IV'
    }else if (count >= 1){
      count = count - 1
      numRomano +='I'

  }

}
  console.log(numRomano)
 return numRomano;
}

//convertToRoman(3999);
export {convertToRoman}
