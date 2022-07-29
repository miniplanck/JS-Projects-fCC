//Convert the given number into a roman numeral.

function convertToRoman(num) {
 let dic = {1000:"M",900:"CM",500:"D",400:"CD",100:"C",90:"XC",50:"L",40:"XL",10:"X",9:"IX",5:"V",4:"IV",1:"I"}; //Creates a dictionary with the standard Roman numerals

 let separated = [];

 num.toString().split("").reduce(function(index,element){
   if(element!= 0){
   separated.push(element*10**(num.toString().length-1-index));
   }
   return index + 1;
 },0); //Separates a given number in terms of the "translatable" components

 let translator = function(number){
   if(dic.hasOwnProperty(number)){   //If the number to translate is alread in the dictionary, return its translation
     return dic[number]
   }
   else{   //If the number is not in the dictionary, we keep adding "base" until we get the number to translate. All the while, finalWrd is being updated with the translation
     let base = 10**(number.toString().length-1), composite = 10**(number.toString().length-1);
     let finalWrd = dic[composite];

     while(composite != number){
       if(dic.hasOwnProperty(composite)){
         finalWrd = dic[composite];
         composite += base;
       }
       else{
         finalWrd += dic[base];
         composite += base;
       }
     }
     return finalWrd+dic[base];
   }
 }
 
 let final = separated().map((element)=>{
   return translator(element);
 })

  return final.join("");
}
