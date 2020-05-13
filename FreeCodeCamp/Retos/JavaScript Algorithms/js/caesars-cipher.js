function rot13(str) {
  const alphabet = {A:'N', B:'O', C:'P', D:'Q', E:'R', F:'S', G:'T',H:'U',I:'V',
 J:'W',K:'X',L:'Y',M:'Z',N:'A',O:'B',P:'C',Q:'D',R:'E', S:'F',T:'G',U:'H',V:'I',W:'J',X:'K',Y:'L',Z:'M'}

  const arrStr = str.split('')
  let str2 = '';


for (let i = 0 ; i< arrStr.length; i++){

  
  if (alphabet[arrStr[i]] === undefined){
    str2 += arrStr[i];

  }else{
    str2 += alphabet[arrStr[i]]
  }
}

console.log(str2)

 return str2;
}

//rot13("SERR YBIR?");

export {rot13}
