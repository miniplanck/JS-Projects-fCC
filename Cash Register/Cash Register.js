//Cash Register

/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
  let change = [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER", 0],["ONE", 0],["FIVE", 0],["TEN", 0],["TWENTY", 0],["ONE HUNDRED",0]];
  let basis = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  
  let yetToGive = cash-price, reversed = cid.slice().reverse();
  let total = cid.reduce((total,element)=>{
    return total+element[1];
  },0)

  if(total == cash-price){
    return {status: "CLOSED", change: cid}; 
    }
  else{
    for(let element of reversed){
      let toAdd = 0;
      if(element[1]>yetToGive){
        if(basis[cid.indexOf(element)]>yetToGive){
          continue;
        }
      }
      while(element[1]>0 && yetToGive>=basis[cid.indexOf(element)]){
        element[1] -= basis[cid.indexOf(element)];
        yetToGive = Math.round((yetToGive-basis[cid.indexOf(element)])*100)/100;
        toAdd += basis[cid.indexOf(element)];
        }
      change[cid.indexOf(element)][1] += toAdd;
    }
    
    if(yetToGive > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []};
      }
    else{
      return {"status": "OPEN", "change": change.reverse().filter((element)=>{ return element[1]>0})}
      }
    }
  }
