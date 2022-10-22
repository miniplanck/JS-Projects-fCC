# Cash Register


### Description

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a  status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

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

### Solution:

Check the Cash Register.js file.

### Solution Breakdown:

In this solution, we start by creating an array with the change values, in the same fashion as the `cid` array. At the same time, we create another array, `basis`, which contains the value of each currency.

Firstly, we check how much change the client must be given (`yetToGive`). We check this value against the total cash in the register, which generates the three main cases to analyse.

If the change due is equal to the amount in the register, we return `{status: "CLOSED", change: cid}`. 

If that is not the case, then we must try to get the due change from the money available. In doing so, we iterate over all the values of the avaible currencies: if the value is greater than the change due, we go to the next, lower currency. If the change due is greater, we start a while loop which ends either when the remaining due change is lower than the value of the currency or is there is no more money of that specific currency, in which case we go to the next element in the register.

When the `for` loop ends, we check whether there is still money to give: if so, then we do not possess the exact value the customer is owed, in which case `{status: "INSUFFICIENT_FUNDS", change: []}` must be returned. If, however, we achieved the exact due change, then `{"status": "OPEN", "change": change.reverse().filter((element)=>{ return element[1]>0})}` is returned, in which the second value of the object is the remaining chash in the register.
