function rot13(str) {
  let all = str.split(""); //Splits the string into single characters to be translated

  let translated = all.map((element)=>{  
    if(element.charCodeAt(0)<65 || element.charCodeAt(0)>90){  //If the unicode of the character is not in the required limits, it is not a CAPITAL letter --> nothing happens
      return element;
    }
    else{ //For CAPITAL letters, we shift the unicode for "A" to 0: subtracting 13 and adding 26 accounts for switches from "A" to "Z". Finally, we account for characters that do not need a shift, by doing %26. Finally, we go back to the original representantion where unicode("A") = 65
      return String.fromCharCode(((element.charCodeAt(0)-65-13)+26)%26+65)
      };
  }).join("");

  return translated;
  }
