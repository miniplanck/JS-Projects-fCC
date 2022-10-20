//Palindrome Checker

function palindrome(str) {
  let letters = str.toLowerCase().split(/[^a-zA-Z0-9]/i).join('').split(''); //Array with the alphanumeric characters.
  
  let strFiltered = letters.join(''); //Creates a string made of the previous letters.
  
  let reversedStr = letters.reverse().join('');//The array "letters" is reversed and parsed into a string.
  
  return reversedStr == strFiltered;//This compares the original alphanumeric string with its reversed version. If they are the same, then it is a Palindrome and returns 'true' 
}
