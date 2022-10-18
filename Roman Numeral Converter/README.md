# Roman Numeral Converter


### Description

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

### Solution:

Check the Roman Numeral Converter.js file.

### Solution Breakdown:

Firstly, we start by creating a dictionary with the correspondence between the arabic and roman numerals. Then, we split the arabic number in its components (p.e., 123 = 100 + 20 + 3).

Lastly, each of the resulting components is translated to roman numerals using the previous dictionary.

This is achieved by implementing the translator method. If the arabic number to be translated is already in the dictionary, then we return its value. However, if that's not the case, then the number must be a sum of an already existing element in the dictionary.

The else statement does exactly this: we sum the corresponding element in the dictionary until the resulting number corresponds exatacly to that which is being translated.


