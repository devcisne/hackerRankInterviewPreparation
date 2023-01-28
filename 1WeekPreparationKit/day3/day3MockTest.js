/**
 * Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome.
 * There may be more than one solution, but any will do.
 * If the word is already a palindrome or there is no solution, return -1.
 * Example:
 * s= "bcbc"
 * Either remove 'b' at index 0 or 'c' at index 3.
 */

const palindromeIndex = (s) => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i].charCodeAt(0) !== s[s.length - 1 - i].charCodeAt(0)) {
      let arr1 = s.split("");
      let arr2 = s.split("");
      arr1[i] = "";
      arr2[s.length - 1 - i] = "";
      if (arr1.join("") === arr1.reverse().join("")) {
        return i;
      } else if (arr2.join("") === arr2.reverse().join("")) {
        return s.length - 1 - i;
      }
    }
  }
  return -1;
};

export { palindromeIndex };
