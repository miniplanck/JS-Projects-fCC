//Cash Register

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
