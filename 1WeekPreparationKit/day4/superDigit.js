/**
 *  
 * We define super digit of an integer x using the following rules:
 * Given an integer, we need to find the super digit of the integer.
 *
 *  - If x has only 1 digit, then its super digit is  x .
 *  - Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x .
 * For example, the super digit of 9875 will be calculated as:
 *
 * super_digit(9875)   	9+8+7+5 = 29 
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2
* Example 
* n='9875'
* k=4
Example

The number p is created by concatenating the string n, k times so the initial p= '9875987598759875' .
    superDigit(p) = superDigit(9875987598759875)
                  9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
    superDigit(p) = superDigit(116)
                  1+1+6 = 8
    superDigit(p) = superDigit(8)
    All of the digits of p sum to 116 . The digits of 116 sum to 8.8 is only one digit, so it is the super digit.
 */

// My initial implementation, this failed due to time complexity when using really big parameters
// const superDigit = (n, k) => {
//   let newString = n.repeat(k);

//   const recursiveSD = (newString) => {
//     if (newString.length == 1) {
//       return parseInt(newString);
//     } else {
//       let total = 0;
//       [...newString].forEach((num) => {
//         total += parseInt(num);
//       });
//       return recursiveSD(total.toString());
//     }
//   };
//   return recursiveSD(newString);
// };

const superDigit = (n, k) => {
  let numString = n.toString();
  if (numString.length == 1) {
    return n;
  }
  let sum = 0;

  for (let i = 0; i < numString.length; i++) {
    sum += Number.parseInt(numString.charAt(i));
  }
  if (k > 0) {
    sum = sum * k;
  }
  return superDigit(sum, 0);
};

module.exports = { superDigit };
