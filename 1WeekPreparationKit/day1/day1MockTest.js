/**
 * Find the median
 * The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list with an odd number of elements find the median?
 *
 * Example:
 * arr=[5,3,1,2,4]
 * The sorted array arr' =[1,2,3,4,5]
 * The middle element and the median is 3
 */

const findMedian = (arr) => {
  const sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  return sortedArr[Math.floor(arr.length / 2)];
};

export { findMedian };
