# Palindrome Checker


### Description

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**: You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others.

We'll also pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.


### Solution:

Check the Palindrome Checker.js file.

### Solution Breakdown:

We wish to check wether a string is a palindrome or not, with a few catches: non-alphanumeric characters are ignored, as well as differenct upper and lowercase variations of the simple palindrome.

Thus, we start by transforming the input string into lowercase only, using `.toLowerCase()`. Secondly, we divide the resulting string into single characters, whose dividors are non-alphanumeric values. This can be achived using `.split()` together with a RegExp `[^a-zA-Z0-9]`.

By this point, only alphanumeric values are in the `letters` array. To check whether they form a palindrome, we first join the letters with `.join('')` (strFiltered) and joined them in the reversed order (reversedStr). 

Finally, we return the comparison bettween both strings: if they are the same, then it is a palindrome and it outputs `true`; otherwise, the output is `false`.


