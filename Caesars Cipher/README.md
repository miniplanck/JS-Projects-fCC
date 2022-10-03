# Caesars Cipher


### Description

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.

Write a function which takes a [ROT13](https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/) encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


### Solution:

Check the Caesars Cipher.js file.

### Solution Breakdown:

The main idea behind this solution is to break whicheer input we get and break it into individual characters, so as to translate each of them. To do so, we apply the `.split("")` method.

After getting all the elements in the string, we must check whether ROT13 must be applied or not. Seeing as the cipher is only applied for uppercase letters, we use map to check if each of the characters' UNICODE falls bellow or above the UNICODE value for the letters `A` and `Z`. If so, it menas it is not an uppercase letter, but a lowercase or non-alphabetic value. In this last case, only the element is retrieved (which helps us preserv spaces, for example); if not hen we proceed with the cipher: this step is a bit harder, and so we devide it into two cases.

First, we know that the letter `A`corresponds to the UNICODE 65, while `Z` corresponds to 90. Inbetween both values, there are 26 others. If the UNICODE of the character we wish to encrypt is `>= 65+14`, then we fall in the usual range for uppercase letters; if not, then we must return to `Z` and subtract from it. That is achieved by the multiple arithmetic steps: we shift the current UNICODE for `A` to 0 (-65); then we apply the cipher (-13). If the resulting number is greater than 0, then we fall in the first cattegory from before, and therefore we sum 26 (number of letter between `A` and `Z`, inclusively) and take the remainder with 26. Afterwads, we shift back to the proper UNICODE representantion and get the desired letter. In the second case, the first subtractions yield a negative number which, taken the remainder with 26, always gives a number less than 26. Therefore, summing 65 yields the proper ltter subtracted from `Z`, just as planned.

Finally, we join all the resulting characters into the resulting output, using `.join("")`.
