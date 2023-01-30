/***
 * Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value.
 * example
 * k=1
 * arr=[1,2,3,4]
 * there are three values that differ by 1
 * 2-1=1
 * 3-2=1
 * 4-3=1
 */

const pairs = (k, arr) => {
  let count = 0;

  arr.forEach((item) => {
    if (arr.includes(item - k)) count++;
  });

  return count;
};

export { pairs };
