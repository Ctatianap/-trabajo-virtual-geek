function checkCashRegister(price, cash, cid) {
  let obj = {status: '', change: [["ONE HUNDRED", 0], ["TWENTY", 0],["TEN", 0], ["FIVE", 0],["ONE", 0], ["QUARTER", 0], ["DIME", 0],["NICKEL", 0],["PENNY", 0]]};
  let cambio = cash - price;
  let efectivo = 0;
  
for (let i =0; i < cid.length ; i++){
  efectivo += cid[i][1]
}

if( cambio < efectivo){
  obj.status = 'OPEN'
}else if(cambio === efectivo){
  obj.status = 'CLOSED'
}else if(cambio > efectivo){
  return {status: "INSUFFICIENT_FUNDS", change: []}
}
console.log(cambio)
console.log(efectivo)
console.log('------------------------------')
let penny = 0
let nickel = 0
let dime = 0
let quarter = 0
let one = 0
let five = 0
let ten = 0
let twenty = 0 
let oneHundred = 0

while (cambio > 0){
  cambio= cambio.toFixed(2)  
  if(cambio >= 100 && cid[8][1] >= 100){
    cid[8][1] -= 100
    cambio -= 100
    oneHundres += 1
    obj.change[0] = ["ONE HUNDRED", (100 * oneHundred)]

  }else if (cambio >= 20 && cid[7][1] >= 20){
    cid[7][1] -= 20
    cambio -= 20
    twenty += 1
    obj.change[1] = ["TWENTY", (20 * twenty)]

  }else if (cambio >= 10 && cid[6][1] >= 10){
    cid[6][1] -= 10
    cambio -= 10
    ten+= 1
    obj.change[2] = ["TEN", (10 * ten)]

  }else if (cambio >= 5 && cid[5][1] >= 5){
    cid[5][1] -= 5
    cambio -= 5
    five += 1
    obj.change[3] = ["FIVE",(5 * five)]

  }else if (cambio >= 1 && cid[4][1] >= 1){
    cid[4][1] -= 1
    cambio -= 1
    one += 1
    obj.change[4] = ["ONE", (1 * one)]

  }else if (cambio >= 0.25 && cid[3][1] >= 0.25){
    cid[3][1] -= 0.25
    cambio -= 0.25  
    quarter += 1  
    obj.change[5] = ["QUARTER", (0.25 *quarter)]

  }else if (cambio >= 0.1 && cid[2][1] >= 0.1){
    cid[2][1] -= 0.1
    cambio -= 0.1
    dime += 1
    obj.change[6] = ["DIME", (0.1 * dime)]

  }else if (cambio >= 0.05 && cid[1][1] >= 0.05){
    cid[1][1] -= 0.05
    cambio -= 0.05
    nickel += 1
    obj.change[7] = ["NICKEL", (0.05 * nickel)]

  }else if (cambio >= 0.01 && cid[0][1].toFixed(2) >= 0.01){
    cid[0][1] -= 0.01
    cambio -= 0.01
    penny += 1
    obj.change[8] = ["PENNY", (0.01 * penny)]
  }else {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
}

if (obj.status !== 'CLOSED'){
  let copyObj = obj.change.filter(element => element[1] > 0)
  obj.change =copyObj;
}else{
  obj.change.reverse()
}


  
  console.log(obj)
  
  console.log("--------------")
  return obj;

}

//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

export {checkCashRegister}