//Telephone Number Validator

function telephoneCheck(str) {
  let validRegex =[/(1[ ]*|)([0-9]{3}-|\([0-9]{3}\)[ ]*)[0-9]{3}-[0-9]{4}/,/(1[ ]*|)[0-9]{3} [0-9]{3} [0-9]{4}/,/(1[ ]*|)[0-9]{10}/]; //The only valid regex;

  for(let ele of validRegex){
    if(str.match(ele) != null){
      if(str.match(ele)[0] == str){
        return true;
      }
    }
  }
  return false;
}

telephoneCheck("11 555-555-5555");
