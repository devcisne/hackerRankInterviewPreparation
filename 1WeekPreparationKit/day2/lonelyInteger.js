/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 * a=[1,2,3,4,3,2,1]
 * The unique element is 4
 */

const lonelyInteger = (a) => {
  const filteredArr = a.filter((num) => {
    return a.indexOf(num) == a.lastIndexOf(num);
  });
  return filteredArr[0];
};

/*
Alternative solution 

function lonelyinteger(a) {
    for (let i = 0; i < a.length; i++) {
        let toAnalize = a[i];
        let hasRepetition = false;
        for (let j = 0; j < a.length; j++) {
            if (toAnalize == a[j] && i != j) hasRepetition = true;
        }
        if (!hasRepetition) return toAnalize;
    }
}

*/

export { lonelyInteger };
