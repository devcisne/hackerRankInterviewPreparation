/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix arr is shown below:
 * 123
 * 456
 * 989
 * The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5 +9=17. Their absolute difference is |15-17|= 2
 */

const diagonalDifference = (array) => {
  let [leftIndex, rightIndex] = [0, array.length - 1];
  let [lToR, rToL] = [0, 0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    // console.log("lI", leftIndex, element[leftIndex]);
    // console.log("rI", rightIndex, element[rightIndex]);
    lToR = lToR + element[leftIndex];
    rToL = rToL + element[rightIndex];
    leftIndex = leftIndex + 1;
    rightIndex = rightIndex - 1;
  }
  return Math.abs(lToR - rToL);
};

export { diagonalDifference };
