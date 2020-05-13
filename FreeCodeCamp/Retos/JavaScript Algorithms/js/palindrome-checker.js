function palindrome(str) {
  str = str.toLowerCase()
  str = str.replace(/[^\w]|_/g, '')
  let myArr = str.split("") 
  let myArr2 = [...myArr]
  
  
  for (let i = 0; i <= myArr.length -1; i++){
        let j = myArr2.length-1-i;
              
            if (myArr[i]===myArr2[j]){
                
            }else{
                return false
            } 
}
return true
}


export {palindrome}
