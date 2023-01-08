/**
 *Julius Caesar protected his confidential information by encrypting it using a cipher. 
 Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
 In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
 */

const caesarCipher = (s, k) => {
  //   console.log(s);
  let outputString = "";
  if (k > 26) {
    k = k % 26;
  }
  for (let index = 0; index < s.length; index++) {
    let isUppercase = false;
    let newLetter;
    let evaluatedLetter = s.charAt(index);

    if (/^[A-Z]*$/.test(evaluatedLetter)) {
      isUppercase = true;
    }
    const letterCharCode = evaluatedLetter.toLowerCase().charCodeAt();
    if (letterCharCode < 97 || letterCharCode > 122) {
      outputString += evaluatedLetter;
      continue;
    }
    if (letterCharCode + k > 122) {
      newLetter = String.fromCharCode(letterCharCode + k - 26);
    } else {
      newLetter = String.fromCharCode(letterCharCode + k);
    }
    if (isUppercase) {
      newLetter = newLetter.toUpperCase();
    }
    outputString += newLetter;
    // console.log(evaluatedLetter, letterCharCode, newLetter);
  }
  return outputString;

  //   console.log(outputString);
};

module.exports = { caesarCipher };
