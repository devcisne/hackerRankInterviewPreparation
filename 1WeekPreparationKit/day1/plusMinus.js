/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
 *
 * Example
 * arr=[1,1,0,-1,-1]
 * There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5,2/5 and 1/5.
 * Results are printed as:
 * 0.400000
 * 0.400000
 * 0.200000
 */

const plusMinus = (arr) => {
  const arrayLength = arr.length;
  let negatives = arr.filter((el) => el < 0).length;
  let zeros = arr.filter((el) => el == 0).length;
  let positives = arr.filter((el) => el > 0).length;

  let negativeRatio = (negatives / arrayLength).toFixed(6);
  let zeroRatio = (zeros / arrayLength).toFixed(6);
  let positiveRatio = (positives / arrayLength).toFixed(6);

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
};

module.exports = { plusMinus };
